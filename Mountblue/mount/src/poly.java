public class poly {
    public static void main(String[] args) {
        // String name="saikumar";
        Bank1 sai=new Bank1("Saikumar", 1234, 9876);
        sai.withdraw(500);
        Bank2 saikumar=new Bank2("Saikumar",5678,15000,2000);
        saikumar.withdraw(2000);

    }
}
class Bank1{
    String bank_name="SBI";
    int roi=7;
    String branch="Muddanur";
    String name;
    int account;
    int balance;
    Bank1(String name, int account,int balance){
        this.name=name;
        this.account=account;
        this.balance=balance;
    }
    void withdraw(int amount){
        if(balance>amount){
            this.balance=this.balance-amount;
            System.out.println("withdraw is successfull");
            System.out.println("Your current balance is :"+this.balance);
        }
        else{
            System.out.println("Insufficient balance");
        }
    }

}
class Bank2 extends Bank1{
    String bank_branch="Bangalore";
    int bank_ifsc=2001;
    int pin;
    Bank2(String name,int account,int balance,int pin){
        super(name,account,balance);
        this.pin=pin;
    }
    void withdraw(int amount){
        
        if(balance>=amount){
            this.balance=this.balance-amount;
            System.out.println("withdraw is successfull");
            System.out.println("Your current balance is :"+this.balance);
        }
        else{
            System.out.println("Insufficient balance");
        }
    }
}
