import markdownStyles from './markdown-styles.module.css'

export default function EpisodeBody({content, src}) {
  console.log(src)
  return (
    <div className="max-w-2xl mx-auto">
      <div
        className={markdownStyles['markdown']}
        dangerouslySetInnerHTML={{ __html: content }}
      />
      <div>
      <audio src={src} controls/>
      </div>
    </div>
  )
}