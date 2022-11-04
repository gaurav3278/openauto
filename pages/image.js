function Image() {
  return (
    <div>
      {[o,rangerover, rangerover2, vancouverMap, vancouverMap2].map(
        (image, index) => {
          return <img key={index} src={image} alt="image" />
        },
      )}
    </div>
  )
}
