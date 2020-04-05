import React, {useState} from 'react';
import { View, StyleSheet, Text, Image } from 'react-native';
import { TouchableOpacity, TextInput } from 'react-native-gesture-handler';
import edit from '../../assets/action-edit.png';
import close from '../../assets/action-close.png';
import spinner from '../../assets/process-spinner.png';

function ActionCard(props){
  const {
    onChange, // function
    isGoodAction, // true or false
    value, // any
    actionName, // string
    actionCTAcontent, // string | undefined
    actionType, // bool | text
    valueType, // hours | steps | bool 
  } = props;

  const [isEditing, setIsEditing] = useState(false);
  const [actionValue, setActionValue] = useState(value || '')
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
      if(isGoodAction){
        return '#8AD879';
      }
      return '#F3533A';
    }
    return '#FA9F42';
  }

  function handleValueChange(e){
    setActionValue(e.nativeEvent.text);
    onChange(e)
  }

  function actionCTAPress(){
    setIsProcessing(!isProcessing)
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
        marginTop: 24
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
        <View style={{flex: 0, flexDirection: "row", alignItems: "center", justifyContent: "space-between"}}>
          <View style={{flex: 0, flexDirection: "row", alignItems: 'baseline'}}>
            {!isEditing ? (
              <Text style={{fontSize: 32, fontWeight: "bold", color: "#ffffff"}}>{actionValue}</Text>
            ) : <TextInput autoFocus value={actionValue} style={{color: "#ffffff", fontSize: 32}} onChange={handleValueChange} />}
            {actionType !== 'bool' && <Text style={{fontSize: 18, color: "#ffffff", marginLeft: 5}}>{valueType}</Text>}
          </View>
          {(isExpanded && actionCTAcontent !== undefined) && (
            <TouchableOpacity onPress={actionCTAPress}>
              <Text
                style={{
                  padding: 5,
                  borderRadius: 5,
                  backgroundColor: 'rgba(255,255,255, .3)',
                  color: '#ffffff',
                  textAlign: 'center',
                  fontSize: 16,
                }}
              >{`${isProcessing ? 'Stop' : 'Start'} ${actionCTAcontent}`}</Text>
            </TouchableOpacity>
          )}
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
    flex: 0,
    flexWrap: 'nowrap',
    justifyContent: 'space-between',
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
  value: '32',
  valueType: 'hours',
  actionCTAcontent: undefined,
};

export default ActionCard;
