import React, {useState} from 'react';
import { StyleSheet, ScrollView, View, Text, Image, ToastAndroid, TouchableOpacity} from 'react-native';
import {Picker} from '@react-native-picker/picker';

// Lesson 8 enhancement - Using StyleSheets and Flexbox Props

const styles = StyleSheet.create({
    container: {
        marginTop: 50,
        marginBottom: 50,
        flexDirection: 'column',
        flex: 1,
        backgroundColor: 'lightgray',
    },
    mainTitle: {
        color: 'navy',
        fontSize: 24,
        fontWeight: 'bold',
        margin: 10,
        textAlign: 'center'
    },
    qn: {
        padding: 10,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: 'skyblue',
    },
    qnImg: {
        margin:10,
        height:240,
        objectFit:'contain',
        borderWidth: 1,
        borderColor: 'gray',
    },
    pickerBox: {
        backgroundColor:'deepskyblue',
        color:'navy'
    },
    submitBtn: {
        margin: 5,
        backgroundColor: 'steelblue',
        height: 50,
        borderRadius: 5,
        justifyContent: 'center',
        alignItems: 'center'
    }
})

//Define own Question component with appropriate parameters and display
const QuizQuestion = ({question}) => {
    return (
        <View style={styles.qn}>
            <Text style={{textAlign:'center'}}>{question}</Text>
        </View>
    );
};

const QuizApp = () => {
    // Declare necessary State variables

    const [q1, ans1] = useState('+12');
    const [q2, ans2] = useState('diamond');
    const [q3, ans3] = useState('x');

    return (
        <ScrollView style={styles.container}>
            <Text style={styles.mainTitle}>Random Concepts</Text>

            {/* Add custom rendering Quiz Question component with appropriate properties set. */}
            {/* Add at least 3 questions. */}
            <QuizQuestion
                question='Using Caeser Cipher, if the code, "Onebgenhzn", is meant to be the word "Barotrauma", what key is used?'
            />

            <Image source={{uri:'https://files.codingninjas.in/7-23123.png'}} style={styles.qnImg} />

            <Picker style={styles.pickerBox} onValueChange={(value) => ans1(value)}>
                <Picker.Item label='+11' value='+11' />
                <Picker.Item label='+12' value='+12' />
                <Picker.Item label='+13' value='+13' />
            </Picker>

            <QuizQuestion
                question='In which of the following does sound travel fastest in?'
            />

            <Image source={{uri:'https://as2.ftcdn.net/v2/jpg/05/27/45/85/1000_F_527458526_7KU8nb6UnzuwJbSI6lh9FgcI9J7qqUlq.jpg'}} style={styles.qnImg} />

            <Picker style={styles.pickerBox} onValueChange={(value) => ans2(value)}>
                <Picker.Item label='Diamond' value='diamond' />
                <Picker.Item label='Water' value='water' />
                <Picker.Item label='Air' value='air' />
            </Picker>

            <QuizQuestion
                question='In 3D programs such as an engine or a game, which axis is typically used to change the height of an object?'
            />

            <Image source={{uri:'https://static.vecteezy.com/system/resources/previews/011/948/552/non_2x/coordinate-axes-geometric-green-cartesian-scale-with-blue-analytical-system-in-xyz-red-diagram-horizontal-and-vertical-planes-vector.jpg'}} style={styles.qnImg} />

            <Picker style={styles.pickerBox} onValueChange={(value) => ans3(value)}>
                <Picker.Item label='x' value='x' />
                <Picker.Item label='y' value='y' />
                <Picker.Item label='z' value='z' />
            </Picker>

            <TouchableOpacity
                style={styles.submitBtn}
                onPress={() => {
                    // Add codes below to tabulate scores, display result and appropriate messages
                    const correctAns1 = '+13';
                    const correctAns2 = 'diamond';
                    const correctAns3 = 'y';
                    let numWins = 0;
                    if (q1 === correctAns1) {
                        numWins+=1
                    }
                    if (q2 === correctAns2) {
                        numWins+=1
                    }
                    if (q3 === correctAns3) {
                        numWins+=1
                    }

                    let mymessage= 'You got ' + numWins + ' out of 3 questions right.';

                    if (numWins === 3) {
                        mymessage = 'You got all questions right. Nice.'
                    }
                    if (numWins === 2) {
                        mymessage += ' Pretty close. Better luck next time.'
                    }
                    if (numWins === 1) {
                        mymessage += ' Try again.'
                    }
                    if (numWins === 0) {
                        mymessage += ' yikes.'
                    }
                    ToastAndroid.show(mymessage, ToastAndroid.SHORT)
                }}
            >
                <Text style={{fontSize: 20}}>SUBMIT</Text>
            </TouchableOpacity>


        </ScrollView>
    );
};

export default QuizApp;