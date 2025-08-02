public class MessageUtil1 {

   private String message;

   public MessageUtil1(String message){
      this.message = message; 
   }

   public String printMessage(){
      System.out.println(message);
      return message;
   }   

   public String salutationMessage(){
      message = "Hi!" + message;
      System.out.println(message);
      return message;
   }   
}