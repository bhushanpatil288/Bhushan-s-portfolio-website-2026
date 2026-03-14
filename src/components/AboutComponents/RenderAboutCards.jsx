import { whatIamDoing } from "../../utils/data"

const RenderAboutCards = () => {
  return (
    <>
      {
        whatIamDoing.map((card, k) => {
          return (
            <div key={k} className="my-bg-secondary shadow-lg p-6 rounded-lg flex gap-4 items-center">
              <div className="text-accent p-5 my-bg-primary rounded-xl h-full flex justify-center items-center shadow-inner">
                <card.icon size={40} />
              </div>
              <div>
                <h3 className="text-xl font-bold">{card.title}</h3>
                <p className="text-gray-400 mt-2">{card.description}</p>
              </div>
            </div>
          )
        })
      }
    </>
  )
}

export default RenderAboutCards