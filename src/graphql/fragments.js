import { gql } from "@apollo/client";

export const REPOSITORY_FIELDS = gql`
  fragment RepositoryFields on Repository {
    ownerAvatarUrl
    fullName
    description
    language
    stargazersCount
    forksCount
    reviewCount
    ratingAverage
  }
`;
