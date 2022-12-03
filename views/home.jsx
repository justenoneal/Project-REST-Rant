const React = require('react')
const Def = require('./default')

function home () {
    return (
        <Def>
            <main>
    <h1>HOME</h1>
    <div >
      <img height="380" width="auto" src="/images/breakfast.jpg" alt="breakfast" />
    </div>
    <a id="placesBtn" href="/places">
        <button className="btn-primary">Places Page</button>
    </a>
</main>
        </Def>
    )
}

module.exports = home