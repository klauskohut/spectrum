import gql from 'graphql-tag';

export const communityInfoFragment = gql`
  fragment communityInfo on Community {
    # admin
    id
    createdAt
    # meta
    name
    slug
    description
    website
    profilePhoto
    coverPhoto
    pinnedThreadId
    features {
      analytics
      privateChannels
    }
    # roles
    communityPermissions {
      isMember
      isBlocked
      isOwner
      isModerator
      reputation
    }
  }
`;
