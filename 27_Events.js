/* When designing the webpage, we always have to interact with the user
in such a way that it satisfies the user.Events are very useful when it comes
to handle the situation. Events are any interaction of user with the application like
mouseClick , mouseover , keyboard keys click and more.
Events helps us to make the webpage responsive according to the event held by the user.*/

// There are three ways to apply the events in Website or webpage:

/* 1: By using HTML tag attributes:-
   <li 'attributeName' = "JS code or Function Definition"/> Some HTML Code </li>
   
   2: By referencing the function inside attribute:-
   <li 'attributeName' = "funcName"/> Some HTML Code </li>

   3: By adding EventListener:
      <script>
      targetElement.addEventListener('eventType',function reference or function definition,eventCapturingStatus);
      </script>
*/

/* In the callback function of event, we have a parameter object of event as 'e'*/

// The default behaviour of events are bubbling hence they are false by default in the third paramter of addEventListener, but true means event capturing//
