                        ------------Javascript------------
(1)---Hoisting in Javascript-----
javascript me hoisting ek esa behavier h jo kisi variables or functions ko automatically hoist krke memory me uper utha deta h  yani variables ya functions ko bina uper declare kiye use call kr skte h or baad me declare kr skte h

example:-
  consloe.log(x);  
  var x=10;



(2)---Promises in javascript-----
Jab koi asynscronus opretaion ko handle kiya jata h (ex-:Api Call ,Server Se Data Ko Lana etc.) to promises ye btata h ki kaam successfull hua ya nhi agar successfull hua to resolve(fulfilled) or agar unsuccessfull hua to reject or agar kaam ho rha h to pending dikhayega.

example:-  
let function promises(resolve,reject){
    let success=True;
    if(success){
        resolve;
    }
    else{
        reject;
    }
}
promises.then(function(result){
    console.log(result);
}).catch(function(error){
    console.log(error);
})





(3)---Api Call---
const Api Call(()=>{
    const [count,setCount]=usestate();

    const api=async()=>{
        const response=await axios.get("https//.............");
        setCount(response.data);
        console.log(data);
    
    })
api();


data.map(()=>{
    return(
        <div>
        <p>NAme:{data.title}</p>
        <p>sallery:{data.sallery}</p>
        </div>
    )
})
})







---(4)---Event Delegation in javascript-----
JAb  kisi Function me bahut sare child function hote h or un pr koi eventHandler lagana h to alg alg sare child component pr koi event trigger krwane ki bajay event delegation ki help se parent function pr hi eventHandler lagaya jata h.

benefit:-
a-jayada memory ka use nhi hota
b-easy code reading
c-Better user interface


            ----------------------------React---------------------
(1)---useState in React---

useState is a hook that allows to add a state variables to your functiona componenet;
usestate two value return krta h ek array ke sath;
useState ki help se UI pr updates show krwaya jata h;

const [Count,setCount]=useState();
count is a state and setCount is a function;



(2)---purpose of useEffect----
Dom Ko Update krna
Server se Data fatch krna
Timer lagane ke liye(setTimeOut,setInterval etc.)



(3)---useEffect se Api Call----

const Api Call(()=>{
    const [count,setCount]=usestate();

    const api=async()=>{
        const response=await axios.get("https//.............");
        setCount(response.data);
        console.log(data);
    
    })
   useEffect(()=>{
    api();
   },[])


data.map(()=>{
    return(
        <div>
        <p>NAme:{data.title}</p>
        <p>sallery:{data.sallery}</p>
        </div>
    )
})
})

  
(4)----Dependencies in useEffect-----
useEffect me Dependencies wo value hoti h jin pr hamara koi bhi effect depend krta h yani jab koi state ya variable me change hota h to Effect Fir se Chalega.
useEffect 3 types k hote h
1-agar hum koi dependency nhi dete h to Effect hr baar component ke render hone pr chalega
example:-useEffect(()=>{
    
});

2-agar hum ek khali array dependency me dete h to effect sirf ek baar hi chalega component ke first time render hone pr
example:-
useEffect(()=>{

},[]);

3-agar hum variables ko dependency me dalte h to effect tabhi chalega jab variable me koi change hoga.
example:-
useEffect(()=>{

},[count]);



(5)---props in react---
react me props wo values hoti h jo ek components se dusre component ko bheji jatyi h or ye value read-only hoti inki value me change nhi kr skte,
ye parents components components se child components m,e data transfer krne ka ek trika 
props ka use components ko dynamic or reusables banane ke liye kiya jaata h;