/*
Assessment Requirements
1. Create a variable that can hold a number of NFT's. What type of variable might this be?
2. Create an object inside your mintNFT function that will hold the metadata for your NFTs. 
   The metadata values will be passed to the function as parameters. When the NFT is ready, 
   you will store it in the variable you created in step 1
3. Your listNFTs() function will print all of your NFTs metadata to the console (i.e. console.log("Name: " + someNFT.name))
4. For good measure, getTotalSupply() should return the number of NFT's you have created
*/

// create a variable to hold your NFTs
const NFTs= [];

// this function will take in some values as parameters, create an NFT object using the parameters passed to it for its metadata, and store it in the variable above.
function mintNFT(name, description, image, creator, price) {
  const nft = {
    name: name,
    description: description,
    image: image,
    creator: creator,
    price: price,
  };
  NFTs.push(nft);
}

// create a "loop" that will go through an "array" of NFTs and print their metadata with console.log()
function listNFTs() {
  for (let i = 0; i < NFTs.length; i++) {
    console.log("Name: " + NFTs[i].name);
    console.log("Description: " + NFTs[i].description);
    console.log("Image: " + NFTs[i].image);
    console.log("Creator: " + NFTs[i].creator);
    console.log("Price: " + NFTs[i].price);
    console.log("------------------------");
  }
}

// print the total number of NFTs we have minted to the console
function getTotalSupply() {
  console.log("Total NFTs: " + NFTs.length);
}

// call your functions below this line
mintNFT("New NFT", "This is a new NFT", "new-image.png", "New Creator", 2.5);
mintNFT("Another NFT", "This is another NFT", "another-image.png", "Another Creator", 3.0);

listNFTs();

getTotalSupply();
