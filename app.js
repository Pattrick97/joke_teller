//1. Welcome screen.
// Welcome text - h1 telling that this page does - button with onlick to go to function that generates a joke.
//2. Button that will generate a random joke.
// generate a random joke from an array - add two more buttons 1. to make a new joke 2. to go back to main
//3. Option to tell another joke or go back to main page.

const jokesArray = [
  "What was the spider doing on the computer? He was making a web-site!",
  "What is the biggest lie in the universe? I have read and agreed to the terms and conditions.",
  "Why was the mobile phone wearing glasses? Because it lost its contacts.",
  "What shoes do computers love the most? Re-boots!",
  "Why did the computer go to the dentist? To get his bluetooth checked.",
  "Autocorrect can go straight to he’ll.",
  "My computer said my password is insecure. Well, maybe if it wasn’t forced to have such strict requirements it would be more confident.",
  "What do you call a computer mouse that swears a lot? A cursor!",
  "If Bill Gates had a penny for every time I had to reboot my computer… Oh wait, he does.",
  "When the person who invented the USB drive dies, they’ll lower his coffin into the grave, realize they put it in the wrong way, and have to do it again… then they’ll realize they had it right the first time.",
  "How does a computer get drunk? It takes screen shots.",
  "Who is a computer’s favorite singer? A Dell.",
  "What does Steve Jobs like to order from McDonald’s? A big Mac.",
  "What is an alien’s favorite place on a computer? The space bar.",
  "Why couldn’t the computer take its hat off? Because it had CAPS LOCK on.",
  "Did you hear about the monkeys who shared an Amazon account? They were Prime mates.",
  "Why did the PowerPoint presentation cross the road? To get to the other slide?",
  "I just got fired from my job at the keyboard factory. They told me I wasn’t putting in enough shifts.",
  "Why did the computer show up late for work? It had a hard drive.",
  "Where do computers go to dance? The disk-O.",
];

const jokeGenerator = (arr) => {
  let joke = document.write(arr[Math.floor(Math.random() * jokesArray.length)]);
  return joke;
};

//jokeGenerator(jokesArray);
