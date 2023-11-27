import { View } from 'react-native';
import HeaderComponent from '../../components/Header';
export default function Notification() {
  return (
        <View>
            <HeaderComponent title={'Notificações'} content={true} />
        </View>
  );
};