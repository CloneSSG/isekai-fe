'use client'

import { usePathname } from 'next/navigation'
import { useState } from 'react'
import { useRecoilState, useSetRecoilState } from 'recoil'
import Alert from '@/components/Alert'
import { AlertState } from '@/components/Alert/state'
import style from '@/containers/join-auth/join.module.css'
import { memberInfoState } from '@/containers/join-email/state'

// Todo: 유효성 검증 함수 부모 컴포넌트에 선언하고, true props 하기

export default function IdInput() {
  const pathname = usePathname()
  const setMemberInfo = useSetRecoilState(memberInfoState)
  const [alert, setAlert] = useRecoilState(AlertState)

  const [userId, setUserId] = useState('')

  const showAlert = (message: string) => {
    setAlert({ isOpen: true, message })
  }

  const closeAlert = () => {
    setAlert({ isOpen: false, message: '' })
  }

  /** 인증번호 발송 로직, 휴대폰 인증과 연결 필요함 */
  async function getDupCheck(arg: string) {
    const regex =
      pathname === '/join-email'
        ? /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/
        : /^[a-zA-Z0-9]{6,21}$/

    if (!userId) {
      return showAlert('아이디를 입력해주세요.')
    }
    if (!regex.test(userId)) {
      if (pathname === '/join-email') {
        return showAlert(
          '이메일 주소가 올바르지 않습니다. 이메일 주소를 정확하게 입력해주세요.',
        )
      }

      return showAlert('아이디를 정확하게 입력해주세요.')
    }

    try {
      const res = await fetch(
        `${process.env.NEXT_PUBLIC_API}/members/auth/duplication-id?inputId=${userId}`,
      )

      const data = await res.json()
      if (res.ok) {
        if (pathname === '/join-email') {
          setMemberInfo((prevState) => ({
            ...prevState,
            dupCheck: true,
            accountId: arg,
            email: arg,
          }))
        } else {
          setMemberInfo((prevState) => ({
            ...prevState,
            dupCheck: true,
            accountId: arg,
          }))
        }
      }
      return showAlert(data.message)
    } catch (err) {
      return err
    }
  }

  return (
    <>
      <div className={`${style.cmem_row} ${style.info}`}>
        <dl className={style.cmem_ip}>
          <dt>
            <span className={style.cmem_require}>
              <span className={style.star} aria-hidden="true">
                *
              </span>
            </span>
            아이디
          </dt>
          <dd>
            <div className={style.cmem_inpbtn_set}>
              <span className={style.cmem_inp_txt}>
                <label htmlFor="email" className={style.blind}>
                  이메일 아이디
                </label>
                <input
                  type="text"
                  maxLength={50}
                  placeholder="이메일주소 입력"
                  value={userId}
                  onChange={(e) => {
                    setUserId(e.target.value)
                  }}
                />
              </span>
              <button
                type="button"
                className={`${style.cmem_btn} ${style.cmem_btn_gray3}`}
                aria-label="중복확인"
                onClick={() => getDupCheck(userId)}
              >
                중복확인
              </button>
            </div>
          </dd>
        </dl>
      </div>
      <Alert isOpen={alert.isOpen} close={closeAlert}>
        {alert.message}
      </Alert>
    </>
  )
}
