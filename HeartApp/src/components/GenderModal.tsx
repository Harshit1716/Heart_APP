// import {StyleSheet, Text, View} from 'react-native';
// import React, {useState} from 'react';
// import {Button, Modal, Radio, VStack} from 'native-base';

// const GenderModal = ({modalVisible, onClose, onChange, data}: any) => {
//   const [value, setValue] = useState(data);
//   return (
//     <Modal isOpen={modalVisible} size="lg" onClose={() => console.log(false)}>
//       <Modal.Content maxWidth="350">
//         <Modal.CloseButton onPress={onClose} />
//         <Modal.Header>Select Language</Modal.Header>
//         <Modal.Body>
//           <Radio.Group
//             name="payment"
//             size="sm"
//             value={value}
//             onChange={nextValue => {
//               setValue(nextValue);
//             }}>
//             <VStack space={3}>
//               <Radio
//                 colorScheme={'rose'}
//                 alignItems="flex-start"
//                 _text={{
//                   mt: '-1',
//                   ml: '2',
//                   fontSize: 'sm',
//                 }}
//                 value="Male">
//                 Male
//               </Radio>
//               <Radio
//                 colorScheme={'rose'}
//                 alignItems="flex-start"
//                 _text={{
//                   mt: '-1',
//                   ml: '2',
//                   fontSize: 'sm',
//                 }}
//                 value="Female">
//                 Female
//               </Radio>
//               <Radio
//                 colorScheme={'rose'}
//                 alignItems="flex-start"
//                 _text={{
//                   mt: '-1',
//                   ml: '2',
//                   fontSize: 'sm',
//                 }}
//                 value="Others">
//                 Others
//               </Radio>
//             </VStack>
//           </Radio.Group>
//         </Modal.Body>
//         <Modal.Footer>
//           <Button my={1} colorScheme={'rose'} flex="1" onPress={() => {}}>
//             Select
//           </Button>
//         </Modal.Footer>
//       </Modal.Content>
//     </Modal>
//   );
// };

// export default GenderModal;

// const styles = StyleSheet.create({});
