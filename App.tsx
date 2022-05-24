import { StatusBar } from 'expo-status-bar';
import { Button, StyleSheet, Text, View, Image, ScrollView, Pressable } from 'react-native';
import { DarkTheme, DefaultTheme, NavigationContainer, useNavigation } from '@react-navigation/native';
import {createMaterialBottomTabNavigator} from '@react-navigation/material-bottom-tabs'
import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
//import { ScrollView } from 'react-native-gesture-handler';

// Navigation stuff

export const Tab = createMaterialBottomTabNavigator();
export const Stack = createStackNavigator();

const nav = useNavigation();

//Reusable components
const Title = (props) => (
  <Text style={styles.title}>
    {props.children}
  </Text>
);

const Heading = (props) => (
  <Text style={styles.heading}>
    {props.children}
  </Text>
);

// Basic tab screens
// Each of these will render the content for that tab.

const ClassScreen = (props) => (
  <ScrollView>
    <Heading>{props.title}Specialisations</Heading>
    {
      data.classes.map(entry => (
        entry.specialisations!.map.(spec => 
          spec.forEach(specialisation =>(
          <SpecPost
            key={specialisation.id}
            image={specialisation.image}
            title={specialisation.title}
            description={specialisation.description}
            />
            ))
        )) 
        ) 
    }
  </ScrollView>
);

const HomeScreen = () => (
  <ScrollView>
    <Heading>Classes</Heading>
      {
        data.classes.map(entry => (
          <ClassPost
            key={entry.id}
            image={entry.image}
            title={entry.title}
            description={entry.description}
            />
        ))
      }
  </ScrollView>
);

const EventScreen = () => (
  <View style={styles.layout}>
    <Text style={styles.title}>Events</Text>
  </View>
)

const FriendScreen = () => (
  <View style={styles.layout}>
    <Text style={styles.title}>Friends</Text>
  </View>
)

const Messages = () => (
  <View style={styles.layout}>
    <Text style={styles.title}>Messages</Text>
    {/* <Button title='Messages' 
    onPress={() => ()}
    /> */}
  </View>
)

const SpecPost = (props) => (
  <View style={classPostStyles.layout}>
    <Pressable onPress={()=>{}}>
    <Image source={{uri: props.image}} style={classPostStyles.image}/>
    </Pressable>
    <View style={classPostStyles.content}>
      <Title>{props.title}</Title>
      <Text style={classPostStyles.description} numberOfLines={2}>{props.description}</Text>
    </View>
  </View>
);


const ClassPost = (props) => (
  <View style={classPostStyles.layout}>
    <Pressable onPress={}>
    <Image source={{uri: props.image}} style={classPostStyles.image}/>
    </Pressable>
    <View style={classPostStyles.content}>
      <Title>{props.title}</Title>
      <Text style={classPostStyles.description} numberOfLines={2}>{props.description}</Text>
    </View>
  </View>
);

const AppNavigator = () => (
  <Tab.Navigator activeColor='orange' inactiveColor='green' barStyle={{backgroundColor:'grey'}} shifting={false}>
    <Stack.Navigator>
      <Tab.Screen name="Classes" component = {HomeScreen}/>
      <Tab.Screen name="Events" component = {EventScreen}/>
      <Tab.Screen name="Friends" component = {FriendScreen}/>
      <Tab.Screen name="Messages" component = {Messages}/>
    </Stack.Navigator>
  </Tab.Navigator>
)

export default function App() {
  return (
    <NavigationContainer>
      <AppNavigator/>
    </NavigationContainer>
  );
}

const classPostStyles = StyleSheet.create({
  layout: {
    marginHorizontal: 24,
    flexDirection: 'row',
    marginVertical: 8,
  },
  image: {
    height: 64,
    width: 64,
    borderRadius: 64/2,
  },
  content: {
    flex: 2,
    padding: 12,
  },
  description: {
    fontSize: 12,
    fontWeight: "400",
    color: '#280D5F',
    paddingTop: 6,
  },
})

const styles = StyleSheet.create({
  layout:{
    flex: 1,
    justifyContent: 'center',
    alignItems:'center',
    backgroundColor:'#fff',
  },
  heading: {
    fontSize: 20,
    fontWeight: "600",
    color: '#08060B',
    paddingTop: 20,
    paddingBottom: 12,
    paddingHorizontal: 24
  },
  title:{
    alignItems: 'center',
    justifyContent: 'flex-start',
    fontSize: 25,
    color: 'white'
  },
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  image: {
    borderRadius: 12,
    flex: 1,
  },
  content: {
    flex: 2,
    padding: 12,
  },
  preview: {
    fontSize: 12,
    fontWeight: 400,
    color: '#280D5F',
    paddingTop: 6,
  },
});


const data = {
  // classes: [
  //   {
  //     id: 'dk', 
  //     name: 'Rex', 
  //     avatar: '',
  //     caretaker: 'Victor Grabarczyk',
  //     source: 'https://unsplash.com/photos/x5oPmHmY3kQ',
  //   },
  //   {
  //     id: '', 
  //     name: '', 
  //     avatar: '',
  //     caretaker: '',
  //     source: 'https://unsplash.com/photos/J40C1k6Fut0',
  //   },
  //   {
  //     id: '', 
  //     name: '', 
  //     avatar: '',
  //     caretaker: '',
  //     source: '',
  //   },
  //   {
  //     id: '',
  //     name: '',
  //     avatar: '',
  //     caretaker: '',
  //     source: 'https://unsplash.com/photos/rMKXLAIa2OY',
  //   },
  //   {
  //     id: '',
  //     name: '',
  //     avatar: '',
  //     caretaker: '',
  //     source: 'https://unsplash.com/photos/uNNCs5kL70Q',
  //   },
  // ],
  classes: [
    {
      id: 'class-1',
      image: 'https://raw.githubusercontent.com/orourkek/Wow-Icons/master/images/class/64/deathknight.png',
      title: 'Death Knight',
      description: "Death Knights are a hero class, which means they start at a high level. Death Knights are a melee class with an emphasis on causing diseases and using dark magic.",
      source: './images/deathknight.png',
      specialisations:[
        {
          unholy: {
            id:'1',
            title: 'Unholy',
            image: '',
            weapons: ["Two-Handed Swords, Two-Handed Axes, Two-Handed Maces, Polearms"],
            role: "Damage Dealer",
            keyAbilities: ["Virulent plague, Scourge Strike, Festering Strike, Army of the Dead, Raise Dead, Unholy Frenzy, Death Grip"],
            description: "Unholy goes Brrr",
          },
          frost: {
            id:'2',
            title: 'Frost',
            image: '',
            weapons: ["Two-Handed Swords, Two-Handed Axes, Two-Handed Maces, One-Handed Swords, One-Handed Axes, One-Handed Maxes"],
            role: "Damage Dealer",
            keyAbilities: ["Frost Fever, Obliterate, Frost Strike, Death Strike, Raise Dead, Pillar of Frost, Death Grip"],
            description: "Frost goes Brrrrrr",
          },
          blood: {
            id:'3',
            title: 'Blood',
            image: '',
            weapons: ["Two-Handed Swords, Two-Handed Axes, Two-Handed Maces, Polearms"],
            role: "Tank",
            keyAbilities: ["Blood Boil, Death Strike, Marrowrend, Death and Decay, Vampiric Blood, Rune Tap"],
            description: "Blood goes squelch",
          }
        }
      ]
      
    },
    {
      id: 'class-2',
      image: 'https://github.com/orourkek/Wow-Icons/blob/master/images/class/64/druid.png?raw=true',
      title: 'Druid',
      description: "Druids are shape-shifters with an affinity for the plant and animal kingdoms. Druids can specialize in healing, casting spells at range, or taking on the form of a cat or bear to fight in melee",
      source: './images/druid.png',
    },
    {
      id: 'class-3',
      image: 'https://github.com/orourkek/Wow-Icons/blob/master/images/class/64/hunter.png?raw=true',
      title: 'Hunter',
      description: "Hunters are at home in the wilderness and have a special affinity for beasts. They rely on their weaponry and their pet to deal damage.",
      source: '/images/hunter.png',
    },
    {
      id: 'class-4',
      image: 'https://github.com/orourkek/Wow-Icons/blob/master/images/class/64/mage.png?raw=true',
      title: 'Mage',
      description: "Mages are the iconic magic-users of Azeroth who learn their craft through intense research and study. They make up for their light armor with a potent array of offensive and defensive spells.",
      source: './images/mage.png',
    },
    {
      id: 'class-5',
      image: 'https://github.com/orourkek/Wow-Icons/blob/master/images/class/64/monk.png?raw=true',
      title: 'Monk',
      description: "Monks are known for their skill in hand to hand fighting, relying on their fists and feet as much as their weapons. Monks can also specialize in calling upon the restorative power of the mists to heal allies.",
      source: './images/monk.png',
    },
    {
      id: 'class-6',
      image: 'https://github.com/orourkek/Wow-Icons/blob/master/images/class/64/paladin.png?raw=true',
      title: 'Paladin',
      description: "Paladins are heavily-armored fighters and adefenders who use Holy magic to heal wounds and combat evil. They can focus on two-handed weapons, shields or healing.",
      source: './images/paladin.png',
    },
    {
      id: 'class-7',
      image: 'https://github.com/orourkek/Wow-Icons/blob/master/images/class/64/priest.png?raw=true',
      title: 'Priest',
      description: "Priests are well-rounded healers with a variety of tools. However they can also sacrifice their healing to deal damage with Shadow magic.",
      source: './images/priest.png',
    },
    {
      id: 'class-8',
      image: 'https://github.com/orourkek/Wow-Icons/blob/master/images/class/64/rogue.png?raw=true',
      title: 'Rogue',
      description: "Rogues often serves as assassins or scouts, though many are lone wolves as well. Rouges can often sneak around enemies or attack and opponent from behind to try and finish them off quickly.",
      source: './images/rogue.png',
    },
    {
      id: 'class-9',
      image: 'https://github.com/orourkek/Wow-Icons/blob/master/images/class/64/shaman.png?raw=true',
      title: 'Shaman',
      description: "Shaman use the power of the elements to enhance their weapon damage or spells. Shaman summon totems in combat, small object that disable enemies, heal, or cause damage to enemies.",
      source: './images/shaman.png',
    },
    {
      id: 'class-10',
      image: 'https://github.com/orourkek/Wow-Icons/blob/master/images/class/64/warlock.png?raw=true',
      title: 'Warlock',
      description: "Warlocks cast Fire or Shadow magic to damage, drain, or curse their enemy. They summon demons as servants.",
      source: './images/warlock.png',
    },
    {
      id: 'class-11',
      image: 'https://github.com/orourkek/Wow-Icons/blob/master/images/class/64/warrior.png?raw=true',
      title: 'Warrior',
      description: "Warriors are plate-wearing fighters who strive for perfection in armed combat. As warriors fight they generate rage, which is used to power special attacks.",
      source: './images/warrior.png',
    },
    {
      id: 'class-12',
      image: '',
      title: '',
      description: '',
      source: '',
    },
  ],
};