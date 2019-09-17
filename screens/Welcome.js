import React, { Component } from 'react';
import { Image, ScrollView, StyleSheet } from 'react-native';
import { Block, Button, Text, Utils } from "expo-ui-kit";

import { background } from "../constants/images";

const { theme } = Utils;
const { SIZES } = theme

const backgrounds = [
    {
        title: "Secured, forever.",
        description: "Curabitur loborthis id lorem id bidendum. Ut id consecteteur magna, Quisque wolupat augue enim, puliviner lobortis.",
        img: background.welcome
    },
    {
        title: "Secured, forever.",
        description: "Curabitur loborthis id lorem id bidendum. Ut id consecteteur magna, Quisque wolupat augue enim, puliviner lobortis.",
        img: background.encrypted
    },
    {
        title: "Secured, forever.",
        description: "Curabitur loborthis id lorem id bidendum. Ut id consecteteur magna, Quisque wolupat augue enim, puliviner lobortis.",
        img: background.privacy
    }
];

export default class Welcome extends Component {
    render() {
        return (
            <Block safe>
                <Block center middle>
                    <ScrollView 
                        horizontal 
                        pagingEnabled
                        scrollEnabled
                        decelerationRate={0}
                        scrollEventThrottle={16}
                        snapToAlignment="center"
                        showsHorizontalScrollIndicator={false}
                    >
                        <Block center bottom style={{
                            width: SIZES.width
                        }}>        
                            <Image 
                                source={background.welcome} resizeMode="contain" style={{
                                    width: SIZES.width / 1.5,height: "100%"
                                }}
                            />
                        </Block>
                    </ScrollView>
                </Block>
                <Block flex={false} center bottom margin={60}>
                    <Text h3 semibold> 
                        Secured, forever.
                    </Text>
                    <Text center caption gray margin={[10, 0]}>
                        Curabitur loborthis id lorem id bidendum. Ut id consecteteur magna, Quisque wolupat augue enim, puliviner lobortis.
                    </Text>
                    <Button primary>
                        <Text center white caption bold margin={[6, 26]}>GET STARTED</Text>
                    </Button>
                </Block>
            </Block>
        )
    }
}

const styles = StyleSheet.create({})