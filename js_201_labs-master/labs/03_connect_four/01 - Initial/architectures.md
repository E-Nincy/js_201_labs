# Design Thinking

Do some research into UI or GUI architectures, and write a few paragraphs summarizing 4 different approaches or strategies:

Write here:
1. Model-View-Controller (MVC)
This architecture divides the application into three parts: the Model (game logic), the View (user interface), and the Controller (user input).
In Connect 4, the controller updates the model after a click, and the view refreshes accordingly.
**Advantages**: clear and well-organized structure.
**Disadvantages**: can become complex in larger applications.

2. Model-View-ViewModel (MVVM)
The ViewModel serves as a bridge between the data and the user interface, keeping them automatically synchronized.
This approach works well for reactive games like Connect 4, where the board state changes frequently.
**Advantages**: modern and efficient for dynamic interfaces.
**Disadvantages**: slightly more difficult to implement and understand at first.

3. Component-Based Architecture
This approach builds the interface from reusable components, such as a “Board,” “Cell,” and “StatusBar.”
Each component manages its own logic and behavior.
**Advantages**: modular, scalable, and easy to maintain.
**Disadvantages**: requires careful initial planning and design.

4. Event-Driven Architecture
In this approach, the system reacts to specific “events,” such as placing a piece or detecting a win.
Each event triggers a corresponding response in the program.
**Advantages**: flexible and adaptable to different scenarios.
**Disadvantages**: can become disorganized if events are not managed properly.