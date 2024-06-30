export function CarouselArea() {
  const contentStyle: React.CSSProperties = {
    margin: 0,
    height: '100%',
    color: '#fff',
    lineHeight: '860px',
    textAlign: 'center',
    background: '#364d79'
  }

  return (
    <div className="w-3/5">
      <Carousel
        autoplay
        arrows
        draggable
        adaptiveHeight
        infinite={false}
      >
        <div>
          <h3 style={contentStyle}>1</h3>
        </div>
        <div>
          <h3 style={contentStyle}>2</h3>
        </div>
        <div>
          <h3 style={contentStyle}>3</h3>
        </div>
        <div>
          <h3 style={contentStyle}>4</h3>
        </div>
      </Carousel>
    </div>
  )
}
