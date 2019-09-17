import React, { Component } from 'react';
import { Image, ScrollView, StyleSheet } from 'react-native';
import { Block, Button, Text, Utils } from "expo-ui-kit";

import { background } from "../constants/images";

const { theme, rgba } = Utils;
const { SIZES, COLORS } = theme

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
    renderImages() {
        return (
            <ScrollView 
                horizontal 
                pagingEnabled
                scrollEnabled
                decelerationRate={0}
                scrollEventThrottle={16}
                snapToAlignment="center"
                showsHorizontalScrollIndicator={false}
            >
                {backgrounds.map((item, index) => (
                    <Block center key={`img-${index}`} bottom style={{
                        width: SIZES.width
                    }}>        
                        <Image 
                            source={item.img} resizeMode="contain" style={{
                                width: SIZES.width / 1.5,height: "100%"
                            }}
                        />
                    </Block>
                ))}
            </ScrollView>
                
        )
    }

    renderDots() {
        return (
            <Block flex={false} row center middle margin={[20, 0, 40, 0]} >
                <Block
                    radius={8} 
                    flex={false}
                    margin={[0, 5]} 
                    color={COLORS.gray}
                    style={{ width: 8, height: 8 }}
                />
                <Block
                    radius={8} 
                    flex={false}
                    margin={[0, 5]} 
                    color={rgba(COLORS.gray, 0.5)}
                    style={{ width: 8, height: 8 }}
                />
                <Block
                    radius={8} 
                    flex={false}
                    margin={[0, 5]} 
                    color={rgba(COLORS.gray, 0.5)}
                    style={{ width: 8, height: 8 }}
                />
            </Block>
        )
    }

    render() {
        return (
            <Block safe>
                <Block center middle>
                    {this.renderImages()}
                </Block>
                <Block flex={false} center bottom margin={60}>
                    <Text h3 semibold> 
                        Secured, forever.
                    </Text>
                    <Text center caption gray margin={[10, 0]}>
                        Curabitur loborthis id lorem id bidendum. Ut id consecteteur magna, Quisque wolupat augue enim, puliviner lobortis.
                    </Text>
                    { this.renderDots() }
                    <Button primary style={{ borderRadius: 30 }}>
                        <Text center white caption bold margin={[6, 26]}>GET STARTED</Text>
                    </Button>
                </Block>
            </Block>
        )
    }
}

const styles = StyleSheet.create({})