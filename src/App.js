import React from 'react';
import './App.css';
import TitlesGrid from './components/TitlesGrid';


const mockData = {
  'new releases': [
    {
      'title': 'Futurama',
      'id': 1,
      'img': 'http://cdn1.nflximg.net/webp/7621/3787621.webp',
    },
    {
      'title': 'The Interview',
      'id': 2,
      'img': 'http://cdn1.nflximg.net/webp/1381/11971381.webp',
    },
    {
      'title': 'The Social Dilemma',
      'id': 3,
      'img': 'https://occ-0-33-37.1.nflxso.net/dnm/api/v6/X194eJsgWBDE2aQbaNdmCXGUP-Y/AAAABeMDOeJD_tH6HJcA_DsR630WW2EW8WSxzT7oyt9D3xpeEYZGxP5qyh4s7M1x_5U5y39Z15q7UVfBmF_jZ2rSlzPXSN9zNrKKdLekD9ad4XX60vM-XsGC_tAIiKrj.jpg?r=9dd',
    } 
  ],
  'continue watching for': [
    {
      'title': 'Indian Matchmaking',
      'id': 4,
      'img': 'https://occ-0-33-37.1.nflxso.net/dnm/api/v6/X194eJsgWBDE2aQbaNdmCXGUP-Y/AAAABYZs11jrx6K6l0pYbcrvVLdnGEf0n9OoWlxYvzn44zG9Olp_1XkDWRt0yu7d9WEhsELNYjU3DEDmcL3MdYa_77CAyYKi9ttEf_1a8RhH_4JORHu8a4AiwSynga4q.jpg?r=dd4',
    },
    {
      'title': 'Cobra Kai',
      'id': 5,
      'img': 'https://occ-0-33-37.1.nflxso.net/dnm/api/v6/X194eJsgWBDE2aQbaNdmCXGUP-Y/AAAABTQHN1YsV8xB7jSQEVVicNKr1N-6IHOjmcXOQ91Ez88d_7pqhnNe9LU9OZdTCZYtOTdBl3YY-Kr8FT67KuLVQKG8X2kb82q031UHYhvCy0JNQitWGec29Nco6hVkRandzc-ldoDaF_BNOLFIBD54rpoWXVlJB0hEOvcc8Oy028u05iqgoMCzNRU.jpg?r=5c5',
    },
    {
      'title': 'Floor is Lava',
      'id': 6,
      'img': 'https://occ-0-33-37.1.nflxso.net/dnm/api/v6/X194eJsgWBDE2aQbaNdmCXGUP-Y/AAAABYgFvlpDCvszZMc67qnwwqf4wG2UR_vne_EtJa3nmAt_BwJSW5as6ozqwZipf2sw07ZKeRRJJ0U052krbLNQJG7fCUIYQ7-Xw7ZqJK4kBvxy1tlxqrTc28LsnpfL.jpg?r=f4c',
    } 
  ]
}

const mockUserData = {
  'userGroup': [
    {
      'id': '123456',
      'name': 'Kat',
      'isLoggedIn': false,
    },
    {
      'id': '123457',
      'name': 'Johnston',
      'isLoggedIn': true,
    },
    {
      'id': '12348',
      'name': 'Dad',
      'isLoggedIn': false,
    },
  ]
}

function App() {
  const categories = Object.entries(mockData);
  const users = Object.values(mockUserData);
  
  return (
    <div className="App">
      <header className="App-header">
        <div className="hero-image__static"></div>
      </header>
      <TitlesGrid categories={categories} users={users}/>
    </div>
  );
}

export default App;