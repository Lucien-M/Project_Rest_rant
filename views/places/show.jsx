const React = require('react')
const Def = require('../default')

function show (data) {
    return (
        <Def>
            <main>
                <h1>{data.place.name}</h1>              
            </main>
            <h2>Comment</h2>
                <h3 className="inactive">
                  No comments yet!
                </h3>
              
              <h2>Rating</h2>
                <h3 className="inactive">
                  Not yet rated
                </h3>
    {/*<img src='/images/meal-3.jpg' alt='meal' />*/}
            <a href={`/places/${data.id}/edit`} className='btn btn-warning'>
                Edit
            </a>
            <form method='POST' action={`/places/${data.id}?_method=DELETE`}>
                <button type='submit' className='btn btn-danger'>
                    Delete
                </button>
            </form>
        </Def>
    )
}


module.exports = show