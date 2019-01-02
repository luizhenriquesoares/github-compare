import React from 'react';

import { Container, Repository } from './styles';

const CompareList = ({ repositories }) => (
  <Container>
    {repositories.map(repository => (
      <Repository key={repository.id}>
        <header>
          <img src={repository.owner.avatar_url} alt={repository.owner.login} />
          <strong>{repository.name}</strong>
          <small>{repository.owner.login}</small>
        </header>

        <ul>
          <li>
            {repository.stargazers_count}
            &ensp;
            <small>starts</small>
          </li>
          <li>
            {repository.forks_count}
            &ensp;
            <small>forks</small>
          </li>
          <li>
            {repository.open_issues_count}
            &ensp;
            <small>issues</small>
          </li>
          <li>
            {repository.pushed_at}
            &ensp;
            <small>last commit</small>
          </li>
        </ul>
      </Repository>
    ))}
  </Container>
);

export default CompareList;
