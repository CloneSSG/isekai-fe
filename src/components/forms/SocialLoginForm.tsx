import Link from 'next/link'
import style from '@/components/login.module.css'

export default function SocialLoginForm() {
  return (
    <ul className={style.cmem_sns_login}>
      <li>
        <Link
          href="/"
          // onClick="snsLogin.naver('login', 'https://m.ssg.com/myssg/main.ssg');return false;"
          // name="snsLogin"
        >
          <span className={style.ico_area}>
            <span className={`${style.sp_cmem_sns} ${style.cmem_ico_naver}`} />
          </span>
          <span className={style.cmem_sns_name}>네이버</span>
        </Link>
      </li>
      <li>
        <Link
          href="/"
          // onClick="snsLogin.kakao('login', 'https://m.ssg.com/myssg/main.ssg');return false;"
          // name="snsLogin"
        >
          <span className={style.ico_area}>
            <span className={`${style.sp_cmem_sns} ${style.cmem_ico_kakao}`} />
          </span>
          <span className={style.cmem_sns_name}>카카오</span>
        </Link>
      </li>
      <li>
        <Link
          href="/"
          // onClick="snsLogin.apple('login', 'https://m.ssg.com/myssg/main.ssg');return false;"
          // name="snsLogin"
        >
          <span className={style.ico_area}>
            <span className={`${style.sp_cmem_sns} ${style.cmem_ico_apple}`} />
          </span>
          <span className={style.cmem_sns_name}>애플</span>
        </Link>
      </li>
      <li>
        <Link
          href="/"
          // onClick="snsLogin.toss('login', 'https://m.ssg.com/myssg/main.ssg');return false;"
          // name="snsLogin"
        >
          <span className={style.ico_area}>
            <span className={`${style.sp_cmem_sns} ${style.cmem_ico_toss}`} />
          </span>
          <span className={style.cmem_sns_name}>토스</span>
        </Link>
      </li>
      <li>
        <Link
          href="/"
          // onClick="snsLogin.toss('login', 'https://m.ssg.com/myssg/main.ssg');return false;"
          // name="snsLogin"
        >
          <span className={style.ico_area}>
            <span className={`${style.sp_cmem_sns} ${style.cmem_ico_phone}`} />
          </span>
          <span className={style.cmem_sns_name}>휴대폰</span>
        </Link>
      </li>
    </ul>
  )
}