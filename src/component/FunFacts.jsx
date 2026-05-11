import './FunFacts.css'

function FunFacts() {
  const facts = [
    {
      emoji: '🤖',
      title: 'No Ears',
      description: 'Doraemon lost his ears when mice ate them, which is why he has only two small ear holes.'
    },
    {
      emoji: '⏰',
      title: 'Time Traveler',
      description: 'Doraemon can travel through time using various gadgets, making him a futuristic helper.'
    },
    {
      emoji: '🎁',
      title: 'Magical Pocket',
      description: 'Doraemon\'s 4D pocket contains infinite gadgets and treasures from the future.'
    },
    {
      emoji: '🍰',
      title: 'Loves Dorayaki',
      description: 'Doraemon\'s favorite food is dorayaki (sweet red bean pastry), and he\'s addicted to it.'
    },
    {
      emoji: '👦',
      title: 'Best Friends',
      description: 'Doraemon and Nobita share an unbreakable bond of friendship across decades.'
    },
    {
      emoji: '🌍',
      title: 'Global Icon',
      description: 'Doraemon is one of the most recognizable characters in the world, loved by millions.'
    },
    {
      emoji: '🏃',
      title: 'Super Speed',
      description: 'Despite his round shape, Doraemon can move incredibly fast when needed.'
    },
    {
      emoji: '💙',
      title: 'White Color',
      description: 'Doraemon is white because after becoming a mouse, his color faded over time.'
    }
  ]

  return (
    <section className="funfacts-section">
      <div className="funfacts-container">
        <div className="funfacts-header">
          <h2 className="funfacts-title">Fun Facts About Doraemon</h2>
          <p className="funfacts-subtitle">Discover interesting trivia about everyone's favorite robot cat</p>
        </div>

        <div className="facts-grid">
          {facts.map((fact, index) => (
            <div key={index} className="fact-card">
              <div className="fact-emoji">{fact.emoji}</div>
              <h3 className="fact-title">{fact.title}</h3>
              <p className="fact-description">{fact.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default FunFacts