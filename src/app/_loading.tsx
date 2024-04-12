import Image from 'next/image'

export default function Loading() {
  return (
    <div className="w-full h-full inline-flex items-center justify-center fixed z-[1500] inset-0">
      <div className="w-8 h-8">
        <Image
          fill
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
          alt="로딩 중"
          src="https://sstatic.ssgcdn.com/ui/m_ssg/img/design/ssg/loading_ssg.webp"
          loading="lazy"
          className="w-8 h-8"
        />
      </div>
    </div>
  )
}
