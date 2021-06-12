import './App.css';
import { useState, useEffect } from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import axios from 'axios';
import styled from 'styled-components';
import Header from './components/shared/header';
import Hero from './components/hero';
import Section from './layout/section';
import Wrapper from './layout/wrapper';
import LaunchCard from './components/lauch-card';

import Grid from './layout/grid';

const MainWrapper = styled.main`
  display: block;
  position: relative;
  width: 100%;

  .grid {
    display: flex;
    flex-wrap: wrap;
  }
`;

const ContentSelector = styled.div`
  width: 80%;
  margin: 0 auto;
  display: flex;
  justify-content: center;

  button {
    border: none;
    padding: 10px;
    min-width: 100px;
    margin-right: 10px;
  }
`;

const List = ({ data, loading, type }) => {
  return (
    <Section>
      {loading && <div>loading....</div>}

      {!loading && (
        <Wrapper>
          <Grid gap='20px'>
            {data &&
              data.length &&
              data.map((item, index) => (
                <Grid.Col key={index.toString()}>
                  <LaunchCard
                    reverse={type === 'launches' ? true : false}
                    image={
                      type === 'launches'
                        ? item.links.patch.small
                        : item.flickr_images
                        ? item.flickr_images[0]
                        : ''
                    }
                    title={item.name}
                    description={
                      type === 'launches' ? item.details : item.description
                    }
                  />
                </Grid.Col>
              ))}
          </Grid>
        </Wrapper>
      )}
    </Section>
  );
};

function App() {
  const [data, setData] = useState({ launches: [], rockets: [] });
  const [searchData, setSearchData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [search, setSearch] = useState('');

  const fetchData = async () => {
    const result = await axios(
      'https://api.spacexdata.com/v4/launches/past?limit=10'
    );

    setData({ ...data, launches: result.data });
    setSearchData(result.data);
    setLoading(false);
  };

  useEffect(() => {
    fetchData();
  }, []);

  const fetchRockets = async () => {
    const result = await axios('http://localhost:4000/rockets');

    setData({ ...data, rockets: result.data.data });
    setLoading(false);
  };

  const fetchLaunches = async () => {
    const result = await axios('http://localhost:4000/launches');

    setData({ ...data, launches: result.data });
    setSearchData(result.data);
    setLoading(false);
  };

  const onClickLink = (url) => {
    if (url === 'rockets') {
      fetchRockets();
    } else if (url === 'launches') {
      fetchLaunches();
    } else {
      fetchData();
    }
  };

  const handleSearch = (e) => {
    setSearch(e.target.value);

    if (e.target.value === '') {
      setData({ ...data, launches: searchData });
      setSearch('');
    }
  };

  const onSearchFunc = () => {
    let filterArr = [...searchData];

    filterArr = filterArr.filter((item) =>
      item.name.toLowerCase().includes(search.toLowerCase())
    );

    setData({ ...data, launches: filterArr });
  };

  return (
    <MainWrapper>
      <Header onClickLink={onClickLink} />
      <Section>
        <Hero />
      </Section>
      <Section>
        <ContentSelector>
          <button>Launches</button>
          <button>rockets</button>
        </ContentSelector>
        <input
          type='text'
          value={search}
          onChange={(e) => handleSearch(e)}
          placeholder='Search...'
        />
        <button onClick={onSearchFunc}>Search</button>
      </Section>
      <Switch>
        <Route
          path='/'
          component={() => (
            <List data={data.launches} type={'launches'} loading={loading} />
          )}
          exact
        />
        <Route
          path='/launches'
          component={() => (
            <List data={data.launches} type={'launches'} loading={loading} />
          )}
        />
        <Route
          path='/rockets'
          component={() => (
            <List data={data.rockets} type={'rockets'} loading={loading} />
          )}
        />
        HELLO
      </Switch>
    </MainWrapper>
  );
}

export default App;
