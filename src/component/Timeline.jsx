import './Timeline.css'

function Timeline() {
  const events = [
    {
      year: '1969',
      title: 'Creation of Doraemon',
      description: 'Doraemon was created in 2112 by Dr. Tenma, a robot cat built to help children.'
    },
    {
      year: '1970',
      title: 'Sent to the Past',
      description: 'Doraemon is sent back to 1969 to help Nobita Nobi from the Sewashi family.'
    },
    {
      year: '1980s',
      title: 'Global Popularity',
      description: 'The manga series becomes a massive hit across Japan and later worldwide.'
    },
    {
      year: '1989',
      title: 'First Film Release',
      description: 'The first Doraemon theatrical film is released, expanding the franchise.'
    },
    {
      year: '2000s',
      title: 'International Expansion',
      description: 'Doraemon\'s popularity spreads to Asia, Europe, and beyond through anime adaptations.'
    },
    {
      year: '2010s-2020s',
      title: 'Modern Era',
      description: 'New anime series, movies, and merchandise continue to delight audiences worldwide.'
    }
  ]

  return (
    <section className="timeline-section">
      <div className="timeline-container">
        <div className="timeline-header">
          <h2 className="timeline-title">Doraemon's Journey</h2>
          <p className="timeline-subtitle">A Timeline of Innovation and Friendship</p>
        </div>

        <div className="timeline">
          {events.map((event, index) => (
            <div key={index} className={`timeline-item ${index % 2 === 0 ? 'left' : 'right'}`}>
              <div className="timeline-content">
                <div className="timeline-year">{event.year}</div>
                <h3 className="timeline-event-title">{event.title}</h3>
                <p className="timeline-description">{event.description}</p>
              </div>
              <div className="timeline-marker"></div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Timeline