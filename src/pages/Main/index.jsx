import React from 'react';
import moment from 'moment';
import api from '../../services/api';
import logo from '../../assets/logo.png';

import { Container, Form } from './styles';

import CompareList from '../../components/CompareList';

export default class Main extends React.Component {
  state = {
    repositoryInput: '',
    repositories: []
  };

  handleAddRepository = async e => {
    e.preventDefault();
    try {
      const { repositoryInput, repositories } = this.state;
      const { data: repository } = await api.get(`/repos/${repositoryInput}`);

      repository.lastCommit = moment(repository.pushed_at).fromNow();

      this.setState({ repositoryInput: '', repositories: [...repositories, repository] });
    } catch (err) {
      throw err;
    }
  };

  render() {
    const { repositories, repositoryInput } = this.state;
    return (
      <Container>
        <img src={logo} alt="Github Compare" />

        <Form onSubmit={this.handleAddRepository}>
          <input
            onChange={e => this.setState({ repositoryInput: e.target.value })}
            value={repositoryInput}
            type="text"
            placeholder="usuário/repositório"
          />
          <button type="submit">OK</button>
        </Form>

        <CompareList repositories={repositories} />
      </Container>
    );
  }
}
