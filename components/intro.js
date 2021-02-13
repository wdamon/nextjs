export default function Intro({title, subtitle, subtitle_color, description}) {
  return (
    <section className="flex-col md:flex-row flex items-center md:justify-between mt-16 mb-16 md:mb-12">
      <div className="flex-row flex items-left">
        <h1 className=" text-6xl md:text-8xl font-bold tracking-tighter leading-tight md:pr-1 ">
          {title}
        </h1>
         <h1 className={`text-${subtitle_color} text-right font-light tracking-tighter leading-tight md:pr-8 mr:0 text-6xl md:text-8xl ml:0`}>
            :{subtitle}
         </h1>
        </div>
    </section>
  )
}