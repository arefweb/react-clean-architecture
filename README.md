# React Clean Architecture
*Author*: *Aref Movahedzadeh*

**What is clean architecture?**
According to  Robert C. Martin (Uncle Bob) [Clean Architecture book](https://blog.cleancoder.com/uncle-bob/2012/08/13/the-clean-architecture.html), Clean Architecture in Software development are some principals and best practices that make your Software really **soft** .
**What does 'Soft' mean?**
Here by soft we mean that a software should be ready for future changes, extensions and modifications. Therefore a good architecture is an architecture that is ready for any major changes, like library change or even framework change. So although we are developing our UI in ***React***, but we shouldn't be dependent on that. Our Software should be framework agnostic.

### Clean Architecture Diagram
![enter image description here](https://blog.cleancoder.com/uncle-bob/images/2012-08-13-the-clean-architecture/CleanArchitecture.jpg)

The above diagram illustrates how a clean architecture and the *Dependency Inversion Principal* works:

 - **Entities & Use cases**:  These are the core business logic of our app. In fact it could be a simple object of data. in a sense we can say that our core business logic should be some raw data and shouldn't change anytime. because our business is independent of a particular framework, language or even the fact that it's online or physical. The same business rules of a real world book store is applied to our core business logic and entities. 

 **How can we apply entities in React?**
 For that matter we use **Redux**.  Redux is a state management library that is framework agnostic. i.e you can use it in React, Angular, Vue.js etc. So our core business logic is implemented in Redux. This layer is completely independent and shouldn't import anything from below layers.
 - **Controllers**: In react these are our services or better say, our api caller functions. This layer is also independent. but our *view* layer which is lower, can access this layer.
 - **UI**: Our UI in React is our *JSX* codes and files. This layer is solely responsible for displaying our UI. So no data related logic is here. We only dispatch a Redux *Action* from here that triggers a middleware related to that action. All asynchronous operations are handled inside middlewares. Middlewares and actions are all defined inside entities layer (redux folder).
### Dependency Injection
 As you can see all our layers are independent. but you may ask:
 If there is no import in middleware logic, then how it can call a specific API?
 Well this is done by something called dependency injection. In fact inside our index.js in root, we inject the APIs Object into the configureStore function. In other words inside our UI and completely independently we introduces the API to our Business layer. This way we kept our rule. which was dependency and separation of concerns. 
 
 ###  Technologies Used:
 In this project I have used:
 - redux toolkit for data management 
 - axios library for API calling
 - and some other react libraries.
 
 ### Live version:
  [demo](https://react-clean-architecture.vercel.app/)