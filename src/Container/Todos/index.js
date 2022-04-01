import React from 'react';
import {View, TouchableOpacity, Text, TextInput} from 'react-native';
import Icon from 'react-native-vector-icons/Feather';
import {connect} from 'react-redux';

import styles from './styles';
import {getTodos} from '../../Actions';

class Todos extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      title: '',
      description: '',
      selectedStatus: 'ON_PROGRESS',
    };
  }

  componentDidMount() {}

  render() {
    return (
      <View style={styles.root}>
        <View style={styles.headingContainer}>
          <Text style={styles.heading}>Redux Todo List</Text>
        </View>

        <View style={styles.inputContainer}>
          <TextInput
            style={styles.input}
            onChangeText={text => this.setState({title: text})}
            value={this.state.title}
            placeholder="Title"
            placeholderTextColor="white"
          />
          <TextInput
            style={styles.input}
            onChangeText={text => this.setState({description: text})}
            value={this.state.description}
            placeholder="Description"
            placeholderTextColor="white"
          />
        </View>
        <View style={styles.statusesContainer}>
          <TouchableOpacity
            onPress={() => this.setState({selectedStatus: 'ON_PROGRESS'})}
            style={[
              styles.statusButton,
              this.state.selectedStatus === 'ON_PROGRESS' &&
                styles.statusButtonSelected,
            ]}>
            <Text
              style={[
                styles.statusButtonText,
                this.state.selectedStatus === 'ON_PROGRESS' &&
                  styles.statusButtonTextSelected,
              ]}>
              Progress
            </Text>
          </TouchableOpacity>

          <TouchableOpacity
            onPress={() => this.setState({selectedStatus: 'DONE'})}
            style={[
              styles.statusButton,
              this.state.selectedStatus === 'DONE' &&
                styles.statusButtonSelected,
            ]}>
            <Text
              style={[
                styles.statusButtonText,
                this.state.selectedStatus === 'DONE' &&
                  styles.statusButtonTextSelected,
              ]}>
              Done
            </Text>
          </TouchableOpacity>
        </View>
        <View style={{flexDirection: 'row', marginLeft: 'auto', marginTop: 20}}>
          <TouchableOpacity style={styles.saveButon}>
            <Text style={styles.buttonText}>Save</Text>
            <Icon name="save" size={20} color="white" />
          </TouchableOpacity>
          <TouchableOpacity style={styles.cancelButton}>
            <Text style={styles.buttonText}>Cancel</Text>
          </TouchableOpacity>
        </View>

        <View style={styles.content}>
          <Text style={styles.todoDateText}>Monday</Text>

          <View style={styles.cardListContainer}>
            <View style={styles.todoCard}>
              <View style={styles.todoTitleContainer}>
                <View style={styles.todoActionContainer}>
                  <Text style={styles.todoTitle}>Shopping</Text>
                  <TouchableOpacity style={styles.doneBadge}>
                    <Text style={styles.doneBadgeText}>done</Text>
                  </TouchableOpacity>
                </View>

                <View style={styles.todoActionContainer}>
                  <TouchableOpacity style={styles.editButton}>
                    <Icon name="edit" size={20} color="white" />
                  </TouchableOpacity>
                  <TouchableOpacity>
                    <Icon name="trash-2" size={20} color="white" />
                  </TouchableOpacity>
                </View>
              </View>
              <View>
                <Text style={styles.todoDescription}>Shopping</Text>
              </View>
            </View>
          </View>
        </View>
      </View>
    );
  }
}

const mapStateToProps = state => {
  return {
    data: state.appData.Todos,
  };
};

const mapDispatchToProps = {
  getTodosData: getTodos,
};

export default connect(mapStateToProps, mapDispatchToProps)(Todos);
