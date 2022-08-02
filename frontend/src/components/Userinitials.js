
import { Text, View } from "react-native";


const InitialIcon = ({ initials }) => {
  return (
    <View
      style={{
        backgroundColor: 'blue',
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: 30,
        width: 50,
        height: 50,
      }}>
      <Text style={{ color: 'white', fontSize: 25 }}>{initials}</Text>
    </View>
  );
};

InitialIcon.defaultProps={
 initials:'X',
}
  
export default InitialIcon