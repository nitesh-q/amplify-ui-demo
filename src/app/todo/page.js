"use client"
import React, { useState } from 'react';
import { View, Text, Flex, Button, TextField } from '@aws-amplify/ui-react';
import '@aws-amplify/ui-react/styles.css';

const App = () => {
    const [userInput, setUserInput] = useState('');
    const [list, setList] = useState([]);

    // Set a user input value 
    const updateInput = (value) => {
        setUserInput(value);
    };

    // Add item if user input is not empty 
    const addItem = () => {
        if (userInput !== '') {
            const userInputItem = {
                // Add a random id which is used to delete 
                id: Math.random(),

                // Add a user value to list 
                value: userInput,
            };

            // Update list 
            setList([...list, userInputItem]);

            // Reset state 
            setUserInput('');
        }
    };

    // Function to delete item from list using id to delete 
    const deleteItem = (key) => {
        const updatedList =
            list.filter((item) => item.id !== key);
        setList(updatedList);
    };

    const editItem = (index) => {
        const editedTodo = prompt('Edit the todo:');
        if (editedTodo !== null && editedTodo.trim() !== '') {
            const updatedTodos = [...list];
            updatedTodos[index].value = editedTodo;
            setList(updatedTodos);
        }
    };

    return (
        <View
            fontFamily='Arial, sans-serif'
            maxWidth='600px'
            // margin='0 auto'
            marginTop='0'
            marginBottom='0'
            marginLeft='auto'
            marginRight='auto'
            padding='20px'
        >
            <Text
                as="p"
                textAlign='center'
                fontSize='2.5rem'
                fontWeight='bold'
                marginBottom='20px'
                color='green'
            >
                Next.js
            </Text>
            <Text
                as="p"
                textAlign='center'
                fontSize='1.5rem'
                fontWeight='bold'
                marginBottom='20px'
            >
                TODO LIST
            </Text>

            {/* <div
                style={{
                    display: 'flex',
                    alignItems: 'center',
                    marginBottom: '20px'
                }}
            >
                <input
                    style={{
                        fontSize: '1.2rem',
                        padding: '10px',
                        marginRight: '10px',
                        flexGrow: '1',
                        borderRadius: '4px',
                        border: '1px solid #ccc',
                    }}
                    placeholder="Add item..."
                    value={userInput}
                    onChange={(item) =>
                        updateInput(item.target.value)}
                />

                <button
                    style={{
                        fontSize: '1.2rem',
                        padding: '10px 20px',
                        backgroundColor: '#4caf50',
                        color: 'white',
                        border: 'none',
                        borderRadius: '8px',
                        cursor: 'pointer',
                    }}
                    onClick={addItem}
                >
                    ADD
                </button>

            </div>
             */}
                <Flex direction='row'>
                    <TextField
                        size="large"
                        fontSize='1.2rem'
                        padding='10px'
                        marginRight='10px'
                        borderRadius='4px'
                        flexGrow='1'
                        placeholder="Add item..."
                        value={userInput}
                        onChange={(item) =>
                            updateInput(item.target.value)}
                        width='500px'
                    />
                    <Button
                       
                        fontSize='12px'
                        padding='10px 20px'
                        variation="primary"
                        color='white'
                        border='none'
                        borderRadius='8px'
                        cursor='pointer'
                        onClick={addItem}
                    >
                        <Text
                            // textTransform='none'
                            textDecoration='none'
                        >Add</Text>
                    </Button>

                </Flex>
            






            <div
                style={{
                    background: '#f9f9f9',
                    padding: '20px',
                    borderRadius: '8px'
                }}
            >
                {list.length > 0 ? (
                    list.map((item, index) => (
                        <div
                            key={index}
                            style={{
                                display: 'flex',
                                justifyContent: 'space-between',
                                alignItems: 'center',
                                marginBottom: '10px',
                            }}
                        >
                            <span style={{
                                fontSize: '1.2rem',
                                flexGrow: '1'
                            }}>
                                {item.value}
                            </span>
                            <span>
                                <button
                                    style={{
                                        padding: '10px',
                                        backgroundColor: '#f44336',
                                        color: 'white',
                                        border: 'none',
                                        borderRadius: '8px',
                                        marginRight: '10px',
                                        cursor: 'pointer',
                                    }}
                                    onClick={() => deleteItem(item.id)}
                                >
                                    Delete
                                </button>
                                <button
                                    style={{
                                        padding: '10px',
                                        backgroundColor: '#2196f3',
                                        color: 'white',
                                        border: 'none',
                                        borderRadius: '8px',
                                        cursor: 'pointer',
                                    }}
                                    onClick={() => editItem(index)}
                                >
                                    Edit
                                </button>
                            </span>
                        </div>
                    ))
                ) : (
                    <div
                        style={{
                            textAlign: 'center',
                            fontSize: '1.2rem',
                            color: '#777'
                        }}
                    >
                        No items in the list
                    </div>
                )}
            </div>
        </View>
    );
};

export default App;
