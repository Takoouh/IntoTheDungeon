##ACTIONS


-GET_FLOOR_LIST is dispatched when we receives the api response
```javascript
{
  type: "GET_FLOOR_LIST"
  floors: INT
}
```

-GET_MONSTER_LIST is dispatched when we receives the api response
```javascript
{
  type: "GET_MONSTER_LIST"
  monsters: []
}
```

-CHANGE_BATTLE_VIEW is dispatched when we chose options during the fight
```javascript
{
  type: "CHANGE_BATTLE_VIEW"
  battleView: STR
}
```

-GET_ITEMS_LIST is dispatched when we receives the api response
```javascript
{
  type: "GET_ITEMS_LIST"
  items: [...]
}
```

-LOADING_ITEMS is dispatched when we call the api
-LOADING_STATS is dispatched when we call the api

-GET_ADVENTURER_STATS is dispatched when we receives the api response
```javascript
{
  type: "GET_ADVENTURER_STATS"
  stats: [...]
}
```


##REDUCERS

-floorsReducer
```javascript
const initital: 0
```
When floorsReducer is dispatched, the state becomes action.floors and action.monsterList

-battleViewReducer
```javascript
const initital: "floorChoice"
```
When battleViewReducer is dispatched, the state becomes action.battleView


-itemsReducer
```javascript
const initital: []
```
When itemsReducer is dispatched, the state becomes action.items

-loadingItemsReducer
```javascript
const initital: false
```
When LOADING_ITEMS is dispatched, the state becomes true
When GET_ITEMS_LIST is dispatched, the state becomes false

-loadingStatssReducer
```javascript
const initital: false
```
When LOADING_STATS is dispatched, the state becomes true
When GET_ADVENTURER_STATS is dispatched, the state becomes false

-statsReducer
```javascript
const initital: []
```
When LOADING_STATS is dispatched, the state becomes true
When statsReducer is dispatched, the state becomes action.stats
