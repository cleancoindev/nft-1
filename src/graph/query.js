let Query = `
{
    tokenContracts(orderBy: numOwners, orderDirection: desc, first: 1000) {
      id
      name
      numTokens
      numOwners
      supportsEIP721Metadata
    }
}
  
{
    ownerPerTokenContracts(where: {numTokens_gt: 0, contract: "0xb57756d92bd170a66b4f361eafbfd13e625372c2"}) {
      owner {
        id
      }
      numTokens
    }
}

{
    ownerPerTokenContracts(where: {
      numTokens_gt: 0, 
      owner: "0x0000f40ce50a52375733aaf71d9d6744271d8ef2"
    }) {
      owner {
        id,
        tokens{
          tokenID,
          contract {
            id
          }
        }
      }
      numTokens
    }
  }

  {
    ownerPerTokenContracts(where: {
      numTokens_gt: 0,
      contract: "0xb57756d92bd170a66b4f361eafbfd13e625372c2",
      owner: "0x0000f40ce50a52375733aaf71d9d6744271d8ef2"
    }) {
      owner {
        id,
        tokens{
          tokenID
        }
      }
      numTokens
    }
  }
`

module.exports = { Query };