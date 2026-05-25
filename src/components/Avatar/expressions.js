export const boyExpressions={

neutral:"/avatars/him/neutral.png",

happy:"/avatars/him/happy.png",

love:"/avatars/him/love.png",

shy:"/avatars/him/shy.png",

laugh:"/avatars/him/laugh.png"

}


export const girlExpressions={

neutral:"/avatars/her/neutral.png",

happy:"/avatars/her/happy.png",

love:"/avatars/her/love.png",

shy:"/avatars/her/shy.png",

}


export function getExpression(
expressions,
mood
){

return(

expressions[mood]
||
expressions.neutral

)

}