##ACTIONS

-ITEMS_LIST is dispatched when we receives the api response
```javascript
{
  type: "ITEMS_LIST"
  items: [...]
}
```

-LOADING_ITEMS is dispatched when we call the api
-LOADING_STATS is dispatched when we call the api

-ADVENTURER_STATS is dispatched when we receives the api response
```javascript
{
  type: "ADVENTURER_STATS"
  stats: [...]
}
```


##REDUCERS

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
When ITEMS_LIST is dispatched, the state becomes false

-loadingStatssReducer
```javascript
const initital: false
```
When LOADING_STATS is dispatched, the state becomes true
When ADVENTURER_STATS is dispatched, the state becomes false

-statsReducer
```javascript
const initital: []
```
When LOADING_STATS is dispatched, the state becomes true
When statsReducer is dispatched, the state becomes action.stats
