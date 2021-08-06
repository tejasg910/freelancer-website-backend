# API Documentation
***
***
## /api/v1/users/getAllUsers?page=1&size=2
###### GET : BODY
```
{
  _id: <userID>
< can give anything from schema here >
}
```
***
## /api/v1/users/registerUser
###### POST : BODY
```
        
{
    "fullName": "Rajeshwar Reddy Kadari",
    "firstName": "Rajeshwar Reddy",
    "lastName": "Kadari",
    "email": "rajeshraj@gm.c",
    "userName": "rajesh",
    "userType": "freelancer",
    "occupation ": "employee",
    "intro": "Rajeshwar is a good boy",
    "profilePic": "profile pic",
    "phoneNumber": "4655132",
    "address": ["ramanthapur, hyderabad", "medak, chegunta"],
    "website": "website",
    "resume": "resume",
    "socialProfiles": [],
    "qualifications": [],
    "works": [],
    "skills": [{
        "name": "javascript",
        "level": "70%"
    },
    {
        "name": "Java",
        "level": "50%"
    }],
    "portfolioProjects": [],
    "reviews": []
}
```
***
## /api/v1/projects/createProject
###### POST : BODY
```
{    
    "projectTitle": "Project Title 6",
    "description": "Project Description 6",
    "skills": ["javascript", "nodejs", "reactjs"],
    "education": ["MTech", "Btech"],
    "workLocation": ["remote", "onsite"],
    "softwareRequirements": ["4gb", "windows", "linux"],
    "freelancersCount": 2,
    "visibility": ["one", "two", "three"],
    "postedBy": "60efa62ea041ba33f7d5d653",
    "budget": {
        "minPrice": 200,
        "maxPrice": 700,
        "currency": "rupee"
    },
    "duration": {
        "from": "30-07-2021", 
        "to": "30-08-2021"
    }
}
```
***
## /api/v1/projects/getAllProjects?page=1&size=2
###### GET : BODY
```
{
  _id: <projectId>
< can give anything from schema here >
}
```

***
## api/v1/favourites/setFavUser 
###### POST : BODY 
```
    {
        "favouriteUserId": <fav user id>, 
        "userId": <current user id>
    }
```

## api/v1/favourites/unSetFavUser 
###### POST : BODY 
```{
    "favouriteUserId": <fav user id>, 
    "userId": <current user id>
    }
```

## api/v1/favourites/getAllFavUsers 
###### GET : BODY 
```{
    "userId": <current user id>
    }
```

## api/v1/favourites/setFavProject 
###### POST: : BODY

```
{    
    "favProjectId": <fav project id>, 
    "userId": <current user id>
}
```

## api/v1/users/setReview
###### POST: BODY

```
{    
    "userId": <freelance user id>
    "reviewedBy": "reviewer user id",
    "title": "string",
    "description": "string",
    "rating": number,
}

```

## api/v1/users/getUserReviews
###### GET : BODY

```
{
   "userId": <current user id>
}
```



## api/v1/users/readNotification: POST

###### GET : BODY
```
{
   "notificationId": <current notification id>
   "userId": <current user id>
}
```
***
## /api/v1/hire/getAllAppliedProjects
###### POST : BODY
```
{
    _id: <application id>
    <can give anything from application schema>
}

```
***
## /api/v1/hire/applyProject
###### POST : BODY
```
{
    "projectId": "60f1b2faf979f66fb1ff659b",
    "userId": "60f1b05ef979f66fb1ff6571",
    "description": "can do  Description",
    "bid": 300,
    "duration": 20,
    "coverLetter": "applicaiton coverletter",
    "attachmentLinks": ["linnk1", "link2"]
}
```
***

## /api/v1/hire/hireApplicant
###### POST : BODY
```
{
    "applicationId" : "60fdba2b2d544172170ea525",
    "clientId": "60f1b17bf979f66fb1ff6595"
}
```
***
## /api/v1/hire/rejectApplicant
###### POST : BODY
```
{
    "applicationId" : "60fdba2b2d544172170ea525",
    "clientId": "60f1b17bf979f66fb1ff6595"
}
```
***

## /api/v1/hire/hireRequest
###### POST : BODY
```
{
    "projectId": "60f1b2faf979f66fb1ff659b",
    "freelancerId": "60f1b05ef979f66fb1ff6571",
    "clientId": "60f1b17bf979f66fb1ff6595",
    "duration": 30,
    "hourlyRate": 30,
    "description": "hello"
}
```
***
## /api/v1/hire/getAllHireRequests
###### POST : BODY
```
{
    "freelancerId": "60f1b05ef979f66fb1ff6571",
}
```
***
## /api/v1/hire/agreeHireRequest
###### POST : BODY
```
{
    "hireRequestId": "61044df2481d76c01185bb3c"
}
```
***
## /api/v1/hire/rejectHireRequest
###### POST : BODY
```
{
    "hireRequestId": "61044df2481d76c01185bb3c"
}
```
***


## /api/v1/users/setContacted
###### POST : BODY
```

{
  "senderUserId": "6107c03239b67f0015c5184f",
  "receiverUserId": "61055a8407ea0e0015a32c45"
}
```
***


## /api/v1/search
###### POST : BODY
```

{
    "searchString" : "project",
    "skills": [
        "javascript"
    ],
    "Location": ["remote"],
    "isRemote": true,
    "budgetMin": 100,
    "budgetMax": 300
}
```
***