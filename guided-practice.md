Testing Guided Practice

Problem
You were hired by a global hotel chain to redesign the functionality of the button panel on their elevators. The goal is to replace the outdated panel in over 1,200 different locations. Before you begin coding, you should make a list of all the ways these panels should be tested to make sure they are working correctly and respond to unexpected input in a way that makes sense.

Expectations
Happy path:
- Expect that the button you press will take you to the correct floor
- Expect that the alarm button will make an alarm noise
- Expect that the alarm button will call for help
- Expect that pressing the open/close buttons will open and close the doors
- Expect that the call button calls and has output from a speaker
- Expect that there's one button per floor
- Expect that buttons on outside panel will call elevator to that floor
- Expect that the elevator will stop at the floor
- Expect the panel to display what floor you're at
- Expect the panel to display if the elevator is going up or down
- Expect the panel to work in different buildings with different numbers of floors


Unhappy path:
- What will happen if there are more buttons than floors
- What will happen if the buttons don't work
- What will happen if the buttons execute a different action
- What will happen if the doors don't open/close
- What will happen if there's no power
- What will happen if it's over capacity
- What will happen if there's a fire
- What will happen if something is stuck at the door
- What will happen if someone hold the door open for too long
- What will happen if the buttons get jammed
- What will happen if someone breaks the buttons
- What will happen if the display shows the wrong floor or doesn't show anything


Integration testing
- Expect the outside panel and inside panel to work together

Functional testing
- Go in the elevator and test all the button on the panel

Acceptance testing
- Expect that all 1,200 elevators are functioning properly
