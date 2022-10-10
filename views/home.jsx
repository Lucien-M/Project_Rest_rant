const React = require('react')
const Def = require('./default')

function home() {
    return (
        <Def>
            <main>
                <h1>REST-Rant</h1>
                <div>
                    <img src='/images/meal-1.jpg' alt='nice meal' /> 
                    <div>
                        Photo by <a href='AUTHOR_LINK'>Louis Hansel</a> on <a href='UNSPLASH_LINK'>Unsplash</a>
                    </div>
                </div>
                <a href='/places'>
                    <button className='btn'>Places Page</button>
                </a>
            </main>
        </Def>
    )
}



module.exports = home