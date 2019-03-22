import React, { Component } from 'react';

class User extends Component {
    state = {
        waffles: [],
        newWaffle: {
            name: '',
            description: ''
        },
        isCreatureFormDisplayed: false
    }
  
    componentDidMount = () => {
      axios.get('/api/v1').then(res => {
          this.setState({creatures: res.data})
      })
    }
  
    toggleCreatureForm = () => {
        this.setState((state, props) => {
            return ({isCreatureFormDisplayed: !state.isCreatureFormDisplayed})
        })
    }
  
    handleChange = (e) => {
      const cloneNewCreature = {...this.state.newCreature}
      cloneNewCreature[e.target.name] = e.target.value
      this.setState({newCreature: cloneNewCreature})
    }
  
    createCreature = (e) => {
      e.preventDefault()
      axios
          .post('/api/v1', {
              name: this.state.newCreature.name,
              description: this.state.newCreature.description
          })
          .then(res => {
              const creaturesList = [...this.state.creatures]
              creaturesList.unshift(res.data)
              this.setState({
                  newCreature: {
                      name: '',
                      description: ''
                  },
                  isCreatureFormDisplayed: false,
                  creatures: creaturesList
              })
          })
  
    }
  
    render() {
      return (
        <div>
          <h1>Creatures</h1>
          {
              this.state.creatures.map(creature => {
                  return (
                      <div key={creature._id}>
                          <Link
                              to={`/${creature._id}`}
                          >
                              {creature.name}
                          </Link>
                      </div>
                  )
              })
          }
          <button onClick={this.toggleCreatureForm}>+ New Creature</button>
          {
              this.state.isCreatureFormDisplayed
                  ? <form onSubmit={this.createCreature}>
                      <div>
                          <label htmlFor="name">Name</label>
                          <input
                              id="name"
                              type="text"
                              name="name"
                              onChange={this.handleChange}
                              value={this.state.newCreature.name}
                          />
                      </div>
                      <div>
                          <label htmlFor="description">Description</label>
                          <textarea
                              id="description"
                              type="text"
                              name="description"
                              onChange={this.handleChange}
                              value={this.state.newCreature.description}
                          />
                      </div>
                      <button>Create</button>
                  </form>
                  : null
          }
        </div>
      )
    }
  }

export default User;

// ingredients: {
//     batter: String,
//     toppings: String
// },
// preferredCrispness: String,
// preferredLocation: String,
// imgLink: String