// We require the Hardhat Runtime Environment explicitly here. This is optional 
// but useful for running the script in a standalone fashion through `node <script>`.
//
// When running the script with `hardhat run <script>` you'll find the Hardhat
// Runtime Environment's members available in the global scope.
const hre = require("hardhat");

const NFT = artifacts.require("KNSAnnouncement");

async function main() {

  let nftAddress = "0x88B7063107d2CF7FAC83E30b37c938fE42c56040";
  let nft = await NFT.at(nftAddress);
  
  await nft.airdrop(
    ['0x5ee07E53B523Ef2E303997BF23FdAf16F7a4E825','0x80fE760CFBBdfffeF3212BC0904d957432828942','0xa27b50e6A5dD3278549ecd0c812ac0d624adE19B','0x34D4C501DB810483c6d6D9b3AeFF8fdF6a7DDfC5','0xDe8Beb1800A4F513220F4Ee3E7bc477328A7e41A','0x917611ef1Fe270e0ED5f4902A08bf52402AB38e7','0x9aCB177c307FB6dF4518F50EA763e988Fd30952A','0x8beCec0Bc061BEd9dbdF47dd7b8CA97688EB9190','0x922aac3e785aE33B6a5cc00e6EbE07a54b753560','0xb4ED23Dc3Db20b40f233dDab53DE684a5b3d53d9','0x3c40d5156b5aAe6503E44995ca32C4726F3b5709','0xDaFF6996f79A28bdF71702573d310b212E73e2f0','0x49e1A2C4733CA613Ff716C714E87d82f2A632591','0x9f4Cdb41A8cD4462eD4179329F411204bBf1642C','0x25de8fC7ac2ca4b26A2cDFAC607F6e01c30E85E3','0x0cbdb416C6B72c8A9BA1688e8960AcCB8b007caA','0x1C61c2B975A227206B9A21f7d4486eC2312cd184','0x452C738c8143Cd315b6B6cE87a348B614ec59599','0x75E5bA9a19CB6cFB49De81EfaBb7CC2520179364','0x50e297165D4d3698cf9Ae7d1aE88F2Fd9AEE30d2','0x750EcC39214780D1F78407A123570E71A697DE83','0xC4a83ab54F791C367A43E3e24F1642Ab25325835','0x66F2eC4fee87E693f620455916898c7E9De5c916','0xab6cD4CC5215e9b911fC136df263C317eD381138','0x57B8c336456DB18Ae468B2400B78e3BADfcbbcE9','0x3c9e5F533B9029E9DB313ffe4e9926D2DB395AFC','0x213f749867D6531B5E53DDA2B0590aEdD9D8A6c8','0x01ff1C55F3AEA9592814B1A0A5b7cef93cD6A2D8','0xD3968A5eC7A80F960423835a26617113cdf00ba6','0x68024d7F576b8c67f68Cc23cd261c7725D37B598','0x52bbf27cB94D78Ec87deD36AEc6346Bcba378793','0xBce4506361036de37EaEB07c3EC9e7d7542e5F2b','0x607e364Cb5d0f746AE49a849B6Be86e452CaA5Db','0x041f17f966e08d707B1890C1D28cfee78F90Bb22','0x176f935234c6009552D4Cf8bD296B3e43bA95B52','0xa35610647F4d52F9ac1e6221AfEdf5c74bF9c774','0x6Fa74885949ECb57780Fc8Ce91BE6C9e390900AB','0x853C210b5F6c8822823353Cc21B65a32bFd6a75a','0x137F05d6D0DD368064dA8aD7E2715d2aCC0156C9','0xE387Ad0fb4e44157954B1CffCB0cCb2621e4F024','0x7316FF076ea1d9e59b5C6027e8DfE24b05C39739','0x7567331290709fCE93B67B77a32eae4a31b80D74','0x70d94429b39e5a34F4E9b99E2E5e1E9D343F6a68','0x7A8708e39803a163d8D70Bcf75B08045e3637AB7','0x49340AA51C1ad354fA25cDC0fC0218f87791e2e2','0xB64C4582E0b084Ca6E301B06271E6e51972C807c','0x056Ea86c687cfC1964aa644AF9aDA4bd98e4e84F','0x422B5dd8cF4047Ec539624D3Af786be7eD85529e','0x772B63326bBad66f508cAA0a79697Ca3d93DFA99','0xE9c2322C96E79F1f9d105a210ca29a51dc8488eD','0x80559E427bD15c5DdE4Fc2645a9649172b4E028E','0xA776AacDe28DdDA89927eDF464aEB1F1524Eb174','0x2b8E79604E6EB7094d87C3379d6F5f4f6f17551D','0xa67715c56baD7c94926AE7E945F3639C8B33c8DB','0x9C7509C4FcbFFe60b71E15E822A0574b94e250A4','0x04b6e1809F53AA06aDC3f5Eca69CA78c1F3AD3D6','0xEc8c82953Bd50397700BEE75C31661D0c9297325','0xA9C7AEd4dbA1BE56d03d570E38E9b64870de8243','0xEa6Fd4A304763A4dCF61Eff70a6b9e39C4397C0E','0xF6Db020a8515abf18811C62fD2593D3b51B91106','0x470b76DDE728a0561eDDBd47d314B2F2Bc488E2d','0x885B148A353D3d3b06a45c19FD6F61D30cC16c9D','0x685f2885fca8158F1390F0629D1E32e7675f19b0','0xF2650f007b81FEAC2246Eaf29C6146e79b2EDcce','0x0A43595A92CcDD529146a15b73d8c317D0FE4189','0x7866e9053bDc2ace91211Ef66a0500E018979B77','0x14Cc2FC7B6D180400612381189c4455685EF6347','0x77192c401eD537F7f2231B331Ba2C86EE65e58Ef','0x766Ba5d465dA21fA3223a75EA9c141f77a359Ff8','0x34EE160D57C7C14D018B6F751fAfd1060b560dB6','0xE70E2d78218ba3c0a69A9f26466538A4aF0638f3','0xe5B0D9aA4264DcF0c26d4a713E3c860FD2de3d79','0x83EfB6B1EB2CC251A0710Da940cbB180ee13De20','0x3B04f797Af3b3Bbb859d8ae12ad2df4Ea01148e3','0x18910F5FbebdE75CE2551C9759dAa5a3b47e5842','0x65838DEd769911a6b7200265ea8454c112C8336C','0xA81927E881040505f0655d489cC73c844f9D2b3B','0x7ACb22FE3f83A6C46b7f8b407045565248120B1D','0xccF303af87AFC6B086b432BBa039153082DEdDe1','0xD92883E2EcDADd2864797d5DC9E2d303500179Aa','0x8E7f7586E4762688A5874E9Ce068007fFa8de758','0x5B4253962E3CBc8f5cAB57656AF4Ec6aaa69dD06','0xAAB368dC6fe2F05eb43ba511F7AefB0890413Af9','0x17cbD516166720b8c75fE75235Ed0218d9CFDFbe','0xd2f5aC05c738B24d4cb46d6c4B4bF9e3e53E6dE2','0xdfDF30Aa33b3e6b79A1e7967488C9eBbd50455f3','0x596539610B74Cb5B3d3532A808D4C0ba0F90E15F','0xf28CD24464E5A97c6D2eDC6ab4bC313BCa097967','0x3917764F62E8318AfBA50e3F25A9565F9ba0158F','0x409A88b244692E07c2A71580159CbDcbDAC6ef44','0xA16785458346F498aa6d84de1F20f1ECDD320865','0x7841F512B2b228e92A0C1881875CA27a25E5B633','0xC8d990612B7aDdD2a311D31345A1766274300a9c','0xF42EF3ed089B0930B63CF7052E4ecB53dC2873F0','0xc508af567262359b5A7780122E837bADd36B7f37','0xDA6Ab390b0450716Ff4ab897c7C719081543f5D4','0xDc41CdE0eb46fd1A75040bCdD8Ed8dF045E28c20','0x95A74E2E0FC07706337edF3a07C2b508FB179363','0x79DE7c4ef73f563b31276626c5516488024D4C90','0x5166160cBf99C6A4e31D47c4971051B98ABa3Be6','0x6F1aD5360527CAd4E7E39CcDeFB3eF73c9d845Fb','0x9C9348082E0B44d492E64268E5C214D2A17f09A9','0xdcaeC64d7212F394d0C84b9d98DD3f9650F1ed79','0x1b9BD2FB4cC03541b4aFb70DF195A54586956DA3','0xEAdDEfaB169D31aB5ac44872bE874E3d901cC0fe','0xac194A46D6D61B362C58ef689412dd4aEeb68f5C','0x3F3E5066D6d61946530a395b25DffDCf37eC026A','0xF503c4CAc2b5A27f68eeE197eFB94e6fDeAa48d1','0x3268fd426A08e4029fb28F823977338F7d151253','0xaBaa03844151735F9455d5F9ab02DAB7d3D37724','0xfFBD96675CD326B297403702FAc666c22304B2c2','0x74e328763ED1E836585eb6543EEfC8bD868960a2','0xB26Ad89e3880e22a75743739CAF1C06b6424dDEE','0xDb5CF28A1A33ECBc18E4d8f6255B27B6e9A58377','0x38CfB9d2F0F2b4AbeBF2c22058a7FA6bE3a6A8AC','0x8bE83453C6371011aAEe2F881bDcA9da490B493e','0x3aD2E4Adf71775246d8533fCcEd7745047FBa5f1','0x77701C4721aE1E7F42D5D5da0d8c43a9634F4821','0xe32d30ab06FC8BBfB589e2630dbcC450185d1EFA','0x725e9021DF1970873E44B97AbC6d1BB0098740d1','0xcE003C6458Bc9d8222A781A70F122beA6f06116C','0x32672fc53b3eaDF2F4E2dA27e11a260dE55615ea','0x9FB59C4d393c91893ee14485a21aBE07E9778cfF','0x4BF1806c8081f491dCc57226481a7e4129d0712F','0x965c7a331bCDf43ceae73781c4eE726f20805d24','0x175D0cB8c3eaB5BC6002c3a2F4fCF3AAe0E59784','0x634dAF5eF8024932Bbf3eFdD8C61ECEFa72c105c','0x9D4b04f4fd3EdFeE8dCA55C975D449c74f431c4D','0xF2b14532e90aE9FDce5a0aDf7b8149f069F15664','0x2e19bE6c108187648d7C351EAC53C08a4F750B41','0xfbd93FE331D76C1030d22DDAFa02d9ba5384E9f6','0x194e4ee1809697c58F002ac47fDD565F8942153e','0x9C847E90d04A66e80F120ed8dDED29BdAa6F68Fe','0xFe89fF79aC68Cd4985d28A8b40b0CB8e45E48Daa','0xA42F06050e2C072BE9FcD1704FF940b8270bc3a4','0x36e1BF18a4685000Bc6b09aAc0De4BA68a866976','0xc455e0c58c7e841B46E416DA774a5D83D1327C73','0x754f22652d56f19eEc8ad101158d9a8FB4958173','0x4051CD65c7c29512533b417edA827BdE989F38C8','0xB99250e81157ae16C81dD10746f5E782ce3583Da','0xEe12B56C61651ccb0EAc877a315Acd1EBf562051','0x6d9Ec75206e8ffA7b8Bb8d7522B5cd799e6d5E48','0x3CfA37b0543213F0b8cEf3e675E2B7F1d93B369A','0x9412e4F2995D836e7db1F4dfAf2C1638a75b24Af','0xd4A0A84631Bc2930423ce475044cC4144Fb9dc21','0x43E53aDd09642DD0db1443Ff8A0057aF964184fB','0x3BA07C3d884502d5e68C56380628950dc734a054','0x133253124496f23576D3D0eD7689E3E1ba9A151e','0xa8aC83509dE6827948B79E57eA3D6E185Ac0812f','0x93c66ec6EF715eB9BD491e30568B455cb7CCc2f8','0x3b4226bC82f2D7A5afC7F796480aBd2500d707c9','0x832679340dc5A6A7B8E97e76E798dD46AA57257E','0x74312F7DaA0A90347A6F13A89AC858c0A343Fe91','0x3f9Bf3D2db65a12295f78A207Cc67B907413DDEe','0x8Cf6978410b6216a315A50d063c023c3584C278C','0x6138545Db89789Cb59F8713D2E6b16cFc056efC2','0x83350cfab9A46C1C424E061F31A2611a5900c54a','0x2f7165c74fe061ffb4Ed48E34bA7A127438dD633','0x05Ade9D6Bd074606C3fBaCcdF50E1DcC89B3d09B','0x985326D41a545e7e46AaAA850900b0a39863D7e2','0x0947ffD9f9307421fFDbfFC345a73CcCdEFe5FD7','0x6bfAA7581Bb90ef4C9CAAC88DfcBA724949bB120','0xE75AD302Bc98c67AA69db6669c967284ed88936D','0x0A8566938aAc6D8Ae8369cF0Cf43cc584Fe1763a','0xb46fa01ecB6A86aeA5fd27Ed21865E4D4253EC8b','0xd496dc0f226E4612f87Bef966788BaB0d969a385','0xF3504018dFa2d64D8A39EDf72d0013227D0b287A','0xeeE18B05D98F2d4730Ab38cFBccab44bBd672de6','0x3F432d4b8173f6D14780BAf6D6e9C67B04a2759c','0xD87704E10b7364a149d70c5f25A85391f230197B','0x89735A54C7E90A40D3337c0c5861914a51cf026A','0x138408d59c798F68d2683bea9a487C616Ee86AFc','0x71228F48758108Dbb8c2094ecA2c5c4542B25e22','0x3bC9E19570b95c52018Dc611cb0144e2B0e41C6c','0x7F345d11ceadAD14ddd23836eAa7ce5576d70537','0x10503a5c1F4137D44cfEFCFF807ef55D42fDEFa0','0x73254d06f0e28f6602866d128a5F451917988896','0x306F906CDe31F67f6cC908ccc49d0517a631F072','0x56d005ac57480e729ff91c25cf74cCFf032e26Ea','0x5EF9ef88F79A1263f4220C4385F949b8D95b9018','0xa818c7824AB952b91dC21D1Ba7e716A5b89906E2','0x659bDF53D2F69f0C0EcEf37A1dbD659fB5c1510D','0xB31E829F5345F8a767Fb9Dfd55e594f92f780591','0xDCFca8A4C0148266602309cABea5D603f4e6eB96','0xd5115E7190f75eaf67AEfD9d3E8581f0E3134570','0xAe7d2790b9ECBfD60a98d126EbE4906DB8826149','0x6e3854b476fAaA025Dc165412Da47b4EAE65C85f','0xd3FC52039907479AF4DbA77e2BC2778fDf3bB584','0xa2aE226F459D8fFd3fb854CBe385b17C84D98d81','0x350Cbcd4936dd7d8801C04417b7073710a4Ecb81','0xC4Ce4d2B4046F004A874ca049Fbae06cBfad65Ff','0x8582f42d8aDA65a1Ca93E36635b79F9425b73e6E','0xe0242ac9B006641C02784bD9618322c0d68624DB','0x3666532b0642838C3a3C8232F976e4a00cF9174e','0xc882cc7aaDAcC84E8ce4069F439a72650aB5715A','0xa7884ceE4284DC3595a3BfeD9b34761e3ea0a95E','0xE0d6776AbEF774F36180264D1Feb80dE66260034','0x9091194f6B1cFDeF73c406b43D293490c8cD424D','0x949a0c67AB05CDBB38250824bc8fC4C7a9B11eDC','0xb45eE2D02D028F4687cA0161b4697cadF021270A','0x070E1caF89EFAE62A9EA42e6B82d42bd067E7eD8','0x15ccF022c1d504ee66b345156138178d9d2A0285','0x1F2b2A8AbF8560c7833832E967B2DEbFDC019E39','0xBf40989e304077a34DD1CF364E9260C1DD46aE70','0xA34387cca93412F1e280cC15232845327B1d9e0c','0x2F09a734C8f327532D7ae1f70277aEd8A0688b82','0xbDbfE5F4D8775472b0398F88FC378ec2E5518558','0xae6e9c0615Add702E666e8A02EB3D6d4fA40FEe4','0xB8C5C8C100299e5d5ca4d7DC4E8F8ED64f395A4E','0x23d291F1b610B9881B99f300C5D70012739a9ef6','0x28eA6d93e131319823ea6C9b447C66bbA6F3F379','0x09b0913ff0a3225b0E449EFB41a1e8816eC07bc9','0xB4bc1DD7D212e0dA74630B08ed09CB67A07f2119','0x6b21717e69876F9d638fb10461dcec5b4ef76046','0xdF5218D0ed3F395e65D0A6e7Bb96C46737149028','0x62532790c216eac2B91Df871bF46774F8EcA3aBA','0x9e2A57c3080408d1523Dd9cd932Df40e5BB95592','0xFD5873b0E11dfA1f848995E34fC017De9F5A3d98','0xacE38b774A5E2c098574D7eE0FC9406d4FE7f768','0x7bfAd1dd12a8010B66DB7aF2606793A3A7938d6B','0xB48923773D965Dcee883de07B43edFEAd21Dc5c7','0xF9452ACB6F856dA43307b1718648630d3B99D20d','0x890860eeCFCADD819C0E38be23F26D1779ea5c6F','0x466a66e57115ec18d45d814bc6AF962D3F33dd79','0x629ca6eDb8e0739De741Fd233f1E717Be52536AD','0x4eB8Dd8872412ff28560277a829c9BE7908954dC','0xdD929d6341B18f77a6a11Eb8c8db66df0C1a04D7','0x6a4642Fa50e5C39562F241485B043D435C445A18','0x6Cd404422A6DCf34278dbc964CC6580125c4879a','0x8d7c9AE01050a31972ADAaFaE1A4D682F0f5a5Ca','0x6ea58D17C6ab88E25b11E343306FC7bd24dD6DAC','0x2FcE80B0f09F762f1c4624e6683591648CEE8700','0x8B5eEb3d1A57a82473FDD8F2d41C39CBD6d1054a','0xCcc473C35b51DEEb7fB0d8Eb9Aac219B8D8D4f78','0xcd0eb48851856f64B7c3e0644C08c252876e6B05','0xdc92609bd50184d46d6E80B6b8Ee379029FE4579','0x533d01A9c2Bc36034623407be7d28AC0c705899b','0x2Afc7B26dcE8e42150C0fC3Cdb5436774d96bb91','0xE7D3A93F13cEC74F8741aD7C0f55DcBBeFf4caF9','0x38C887E1D70B66295A1624d806eCA34a7e3BD4e2','0x7b2984f31A214fdb16B07E46385536e8b76e3E98','0xD176702E1D2B71384dd3308FE2A32ECDdB77d224','0xD723127B0C9aFF7B08A8AAAc3F6B95D0716926fA','0x17b23468FF055C323E386F4014D8eABD183E31B9','0x90470d99c9D5B04F27Ca61c621BAFefA0d3E62a1','0xC9eaDcB8172600AFcB75E1707Cda3B8eCd854282','0xE4ac65C99ADb17aA77d5f1B2709501Be7368c041','0x9a5941D2E106Ec7F1cf12B071Ef5C89Da228B25c','0x3F74cfE9E8b1940C789ff55C63d05AE2805565ba','0x528e92C706a093AA5e2cB892955634361D40cC4F','0xaBD892dd47D1497Fa76B77413eE3C56890bd00CC','0x0694BEB75a044E67b665e8cAb49c583337598E1F','0xe7604C000011444793e7021B41448f0753972719','0x819A899c0325342CD471A485c1196d182F85860D','0xcb9C47cd07370e0Be8369251B6908F529FBECfb9','0x15a6554A8439C3eE01603E793904BFbBc191c172','0xA026e93eb51AAEa5dd64aF3a91Ea237347762080']
    );
}

main()
  .then(() => process.exit(0))
  .catch(error => {
    console.error(error);
    process.exit(1);
  });
