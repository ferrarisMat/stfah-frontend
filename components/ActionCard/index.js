import React, {useState} from 'react';
import { View, StyleSheet, Text, Image } from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';
import edit from '../../assets/action-edit.png';
import close from '../../assets/action-close.png';
import spinner from '../../assets/process-spinner.png';

function ActionCard(props){
  const {
    onChange,
    actionType,
    value,
    actionName,
    valueType,
  } = props;

  const [isEditing, setIsEditing] = useState(false);
  const [actionValue, setActionValue] = useState(value)
  const [isExpanded, setIsExpanded] = useState(false)
  const [isProcessing, setIsProcessing] = useState(false);

  function handleEditPress(){
    setIsEditing(true);
  }

  function handleClosePress(){
    if(isEditing){
      setIsEditing(false);
    }
    if(isExpanded){
      setIsExpanded(false);
    }
  }

  function handleCardPress(){
    if(!isExpanded && !isEditing){
      setIsExpanded(true);
    }
  }

  function background(){
    if(!isProcessing){
      if(actionType === 'good'){
        return '#8AD879';
      }
      return '#F3533A';
    }
    return '#FA9F42';
  }

  const EditIcon = () => {
    return (
      <TouchableOpacity onPress={handleEditPress}>
        <Image source={edit} style={style.icon} />
      </TouchableOpacity>
    )
  }
  const CloseIcon = () => {
    return (
      <TouchableOpacity onPress={handleClosePress}>
        <Image source={close} style={style.icon} />
      </TouchableOpacity>
    )
  }
  
  return (
    <TouchableOpacity
      onPress={handleCardPress}
      style={{
        shadowColor: "#000",
        shadowOffset: {
          width: 0,
          height: 4,
        },
        shadowOpacity: 0.32,
        shadowRadius: 5.46,
        elevation: 9,
      }}
    >
      <View style={{
        ...style.actionCard,
        backgroundColor: background(),
        width: isExpanded ? '100%' : 150,
      }}>
        <View style={style.header}>
          <View style={{flex: 0, flexDirection: 'row', alignItems: 'center'}}>
            <Text style={style.titleHeader}>{actionName}</Text>
            {isProcessing ? <Image source={spinner} style={{width: 18, height: 18, marginLeft: 6}} /> : null}
          </View>
          {(!isEditing && !isExpanded) && <EditIcon />}
          {(isExpanded || isEditing) && <CloseIcon />}
        </View>
      </View>
    </TouchableOpacity>
  )
}

const style = StyleSheet.create({
  actionCard: {
    padding: 12,
    borderRadius: 5,
    width: 150,
    height: 150,
  },
  icon: {
    width: 30,
    height: 30,
  },
  header: {
    flex: 0,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  titleHeader: {
    fontSize: 24,
    color: "#ffffff",
  }
});


ActionCard.defaultProps = {
  onChange: () => {},
  actionType: 'good',
  value: null,
  actionName: 'test action',
  valueType: 'text',
};

export default ActionCard;
