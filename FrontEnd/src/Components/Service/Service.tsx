interface ServiceProps {
    children: React.ReactNode,
    title: string,
    desc: string
}

const Service = ({children , title , desc} : ServiceProps) => {
  return (
      <div className="bg-[#f7f7f7] w-full flex items-center gap-4 p-4 rounded-2xl border border-stroke">
          {children}
          <div>
              <h4 className="text-sm font-iran-yekan-bold">{title}</h4>
              <p className="text-[13px]">{desc}</p>
          </div>
    </div>
  )
}

export default Service