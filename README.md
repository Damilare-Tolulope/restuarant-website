# restuarant-website
Sidehustle Capstone project for group 19.

## Contributing Guidelnes:

- Checkout the official repository: https://github.com/Damilare-Tolulope/restuarant-website
- Next fork the repository, from the fork option on the top right corner of the repo page.
- Once thats done, you will have your own copy of the actual repository.
- Copy the link from browser bar. It should be something like this: https://github.com/<your-user-name>/restuarant-website
- Open Terminal (Linux and MacOS) or git bash terminal (Windows) and enter the following command :

```
git clone https://github.com/<Your account name>/restuarant-website

cd Web-App
```

- To install the packages:

#### Install dependencies

```
npm install
```

or

```
yarn
```

- To run the application

#### Run the app

```
npm run start
```


- Now you will have the application running. Close the window and lets head back to terminal
- Then add upstream as follows:

```
git remote add upstream https://github.com/Damilare-Tolulope/restuarant-website
```

- Check if upstream is added:

```
git remote -v
```

- Make sure u get an ouput similar to the one below:

```
origin      https://github.com/<Your account name>/restuarant-website (fetch)
origin      https://github.com/<Your account name>/restuarant-website (push)
upstream    https://github.com/Damilare-Tolulope/restuarant-website (fetch)
upstream    https://github.com/Damilare-Tolulope/restuarant-website (push)
```

- Now create your own branch (for each module create a seperate branch and give the branch name as module name):

```
git checkout -b <branch-name>
```

- Open the app folder using VSCode or any code editor you use
- Make sure you are on your created branch
- Make changes to the app files
- Save everything
- Now comeback to the terminal. Now its time you push your changes to your forked repository in your github account.

```
git add <files-changed>
git commit -m "<Mention changes made>"
git push origin <branch-name-you-created>
```

- Now open the forked repo on Github. Change to your created branch. Now you will see an option to Make a Pull Request.

- Click on that , and make sure you are making a Pull request to the Develop branch of the original repository , NOT THE MAIN BRANCH !!
- Once you make the PR , sit back and relax. Dont do any changes until your PR is merged or until you are asked to make changes.
