"use client"
import React, { useEffect, useState } from 'react';
import { View, Text, Flex, Button, TextField } from '@aws-amplify/ui-react';
import '@aws-amplify/ui-react/styles.css';
import { generateClient } from 'aws-amplify/api';
import { createTodoModel, deleteTodoModel, updateTodoModel } from '@/graphql/mutations';
import { listTodoModels, getTodoModel } from '@/graphql/queries';
import { Amplify } from 'aws-amplify';


Amplify.configure({
    "aws_project_region": "us-west-1",
    "aws_appsync_graphqlEndpoint": "https://pnrzy654xbhjnc42rhdb6y67aa.appsync-api.us-west-1.amazonaws.com/graphql",
    "aws_appsync_region": "us-west-1",
    "aws_appsync_authenticationType": "API_KEY",
    "aws_appsync_apiKey": "da2-wyzwsinpnjelza6znmx3qnog7y"
});

const client = generateClient()

const App = () => {
    const [userInput, setUserInput] = useState('');
    const [list, setList] = useState([]);

    // Set a user input value 
    const updateInput = (value) => {
        setUserInput(value);
    };

    // Add item if user input is not empty 
    const addItem = async () => {
        if (userInput !== '') {
            const userInputItem = {
                // Add a random id which is used to delete 
                id: Math.random(),

                // Add a user value to list 
                value: userInput,
            };

            const newTodoModel = await client.graphql({
                query: createTodoModel,
                variables: {
                    input: {
                        "title": userInput
                    }
                }
            });
            console.log('newTodoModel...', newTodoModel)



            // Update list 
            setList([...list, userInputItem]);
            console.log('additem...', userInputItem)

            // Reset state 
            setUserInput('');
        }
    };

    useEffect(() => {
        page_1()
    }, [])

    const page_1 = async () => {
        // List all items
        const allTodoModels = await client.graphql({
            query: listTodoModels
        });
        setList([...allTodoModels?.data?.listTodoModels?.items]);
        const a1 = allTodoModels?.data?.listTodoModels?.items.map((i) => { return { id: i.id, value: i.title } })
        console.log('allTodoModels...', a1)
    }
    console.log('list...', list)





    // Function to delete item from list using id to delete 
    const deleteItem = async (key) => {
        const updatedList = list.filter((item) => item.id !== key);
        const deletedTodoModel = await client.graphql({
            query: deleteTodoModel,
            variables: {
                input: {
                    id: `${key}`
                }
            }
        });
        if (deletedTodoModel) {
            location.reload();
        }
    };

    const editItem = async (index) => {
        const editedTodo = prompt('Edit the todo:');
        if (editedTodo) {
            const updatedTodoModels = await client.graphql({
                query: updateTodoModel,
                variables: {
                    input: {
                        id: `${index}`,
                        "title": `${editedTodo}`
                    }
                }
            });
            if (updatedTodoModels) {
                location.reload();
            }
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


            <Flex>
                <TextField
                    placeholder="Add item..."
                    labelHidden={true}
                    value={userInput}
                    onChange={(item) => updateInput(item.target.value)}
                    size="large"
                    width='475px'
                />
                <Button
                    cursor='pointer'
                    onClick={addItem}
                >
                    <Text>Add</Text>
                </Button>
                <Button
                    cursor='pointer'
                    onClick={page_1}
                >
                    <Text>check data</Text>
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
                                {item.value || item.title}
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
                                    onClick={() => editItem(item.id)}
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
