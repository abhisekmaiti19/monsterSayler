new Vue ({
el :'#app',
data: {
    playerHealth:100,
    monsterHealth:100,
    gameIsRunning: false,
    turns: [


    ]
},
methods:{
    startGame: function()
    {
        this.gameIsRunning = true;
        this.playerHealth = 100;
        this.monsterHealth = 100;
        this.turns= [];
    },

    attack: function()
    {
        var damage = this.calculateDamage(1,10) ; 
        this.monsterHealth -= damage;
           this.turns.unshift({
               isPlayer: true,
               text: 'Player hits monster ' + damage
           })
        if(this.checkWin())
        {
            return;
        }
           this.playerHealth -=this.calculateDamage(5,12);

           if(this.playerHealth <=0)
           {
               alert('you lost!');
               this.gameIsRunning = false;
           }
           this.checkWin();
        
        },
    specialAttack: function()
    {
        damage= this.calculateDamage(10,20);
        this.monsterHealth -=damage;
        if(this.checkWin())
        {
            return;
        }
        this.playerHealth -=this.calculateDamage(5,12);
        this.turns.unshift({
            isPlayer: true,
            text: 'Player hits monster ' + damage
        })
        this.checkWin();


    },
    heal: function ()
    {                   if(this.playerHealth <= 90){
        this.playerHealth +=10;
    }
                    else{
                        this.playerHealth= 100;
                    }
                    if(this.playerHealth <= 99)
                    {
                    this.turns.unshift({
                        isPlayer: true,
                        text: 'Player heals and increse by 10' 
                    })
                }
                    this.monsterHealth();
    },
    giveUp: function()
    {
            this.gameIsRunning = false;
    },
    monsterAttacks: function(){
        var damage = this.calculateDamage(5,12);
  this.playerHealth -=damage;
        this.checkWin();
        this.turns.unshift({
            isPlayer: false,
            text: 'Monster hits monster ' + damage
        });

    },
    calculateDamage: function(min,max)
    {

            return Math.max(Math.floor(Math.random() * max)+1, min);


    },
    checkWin : function()
    {

        if(this.monsterHealth<=0)
        {
        if(confirm('you win! New game?'))
        {
            this.startGame();
        }
        else{
            this.gameIsRunning=false;
        }
        return true;
        
        } else if (this.playerHealt<=0)
        {
            if(confirm('you lost! New game?'))
        {
            this.startGame();
        }
        else{
            this.gameIsRunning=false;
        }
        return true;
        }
        return false;
    }
}
});