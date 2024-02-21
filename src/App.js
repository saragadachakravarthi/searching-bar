import {Component} from 'react'
import UserProfile from './components/UserProfile'
import './App.css'

const initialUserDetailsList = [
  {
    uniqueNo: 1,
    imageUrl: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQkPQ2dAkgkwaMUvq2EwlWsphzvDHdF1NTrKA&s',
    name: 'Prabhas',
    role: 'Hero',
  },
  {
    uniqueNo: 2,
    imageUrl: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ6DWVfRUwbtTKg6f9Npgp8fWrVGSjxessH_w&s',
    name: 'Arjun Das',
    role: 'Villain',
  },
  {
    uniqueNo: 3,
    imageUrl: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSiQZ4XH0Fp4bjE0voK2jLyZ2PVIIRRPFwBng&s',
    name: 'Samantha',
    role: 'Heroine',
  },
  {
    uniqueNo: 4,
    imageUrl: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTh5DrIxBRXj9fK1femp5xJ6oAgKK-e6Y2Qrw&s',
    name: 'Brahmi',
    role: 'Comedian',
  },
  {
    uniqueNo: 5,
    imageUrl: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSLOcPADGoY_eG8-axel1W5bYeHcOKi51Kwcw&s',
    name: 'Rajmouli',
    role: 'Director',
  },
]

class App extends Component {
  state = {
    searchInput: '',
    usersDetailsList: initialUserDetailsList,
  }

  onChangeSearchInput = event => {
    this.setState({
      searchInput: event.target.value,
    })
  }

  deleteUser = uniqueNo => {
    const {usersDetailsList} = this.state
    const filteredUsersData = usersDetailsList.filter(
      each => each.uniqueNo !== uniqueNo,
    )
    this.setState({
      usersDetailsList: filteredUsersData,
    })
  }

  render() {
    const {searchInput, usersDetailsList} = this.state
    const searchResults = usersDetailsList.filter(eachUser =>
      eachUser.name.includes(searchInput),
    )
    return (
      <div className="app-container">
        <h1 className="title">Users List</h1>
        <input
          type="search"
          onChange={this.onChangeSearchInput}
          value={searchInput}
        />
        <ul className="list-container">
          {searchResults.map(eachUser => (
            <UserProfile
              userDetails={eachUser}
              key={eachUser.uniqueNo}
              deleteUser={this.deleteUser}
            />
          ))}
        </ul>
      </div>
    )
  }
}

export default App
