// replace `${i}` --> \`\${i}\`

const data = [

// card ----------------------------------------------------- >
[
//html
[],
//css
[],
//js
[],
// output
[
{'comment': `Dockerfile`},
{'output': `FROM node:alpine

WORKDIR /app
COPY package.json ./
RUN npm install
COPY ./ ./

CMD ["npm", "start"]`},

{'comment': `\n.dockerignore`},
{'output': `node_modules`},
],
//render
{'render': false}
],

// card ----------------------------------------------------- >
[
//html
[],
//css
[],
//js
[],
// output
[
{'comment': `build docker image from docker file in current directory`},
{'output': `docker build -t <tag-name>:version .`},

{'comment': `\nmanage docker images, commands: "push, pull, rm, prune, ls"`},
{'output': `docker image [command] <image id || image tag>`},

{'comment': `\ncreate and start container, options: -d <detach>, --name <name>, -p <control ports>, -it <override default cmd commands>`},
{'output': `docker run [options] [name] PORT:PORT <image id || image tag> <cmd>`},

{'comment': `\ninfomation about only running containers, -a optional for all containers`},
{'output': `docker ps -a`},

{'comment': `\nmodify docker container, commands: "start, pause, unpause, restart, stop, kill, rm, logs, ls"`},
{'output': `docker [command] <container id>`},

{'comment': `\nexecute command in a running container`},
{'output': `docker exec -it <container id> <cmd>`},
],
//render
{'render': false}
],

// card ----------------------------------------------------- >
[
//html
[],
//css
[],
//js
[],
// output
[
{'comment': `kubernetes infra/k8s/file.yaml`},


{'comment': `\ncreate/update kubernetes object`},
{'output': `kubectl apply -f file.yaml`},

{'comment': `\nrequired fields:
  apiVersion - which version of the Kubernetes API you're using to create this object
  kind - what kind of object you want to create, Pod, Deployment, Service
  metadata - data that helps uniquely identify the object
  spec - what state you desire for the object`},

{'output': `\napiVersion: v1
kind: Pod
metadata:
  name: posts
spec:
  containers:
    - name: posts
      image: username/posts:latest`},
],
//render
{'render': false}
],

// card ----------------------------------------------------- >
[
//html
[],
//css
[],
//js
[],
// output
[
{'comment': `get running objects => pods, deployments, services`},
{'output': `kubectl get <object>`},

{'comment': `\ndelete object => pod, deployment, service`},
{'output': `kubectl delete <object> <ID>`},

{'comment': `\nretrieve logs`},
{'output': `kubectl logs <podID || deploymentID>`},

{'comment': `\nupdate/restart deployment to apply updates`},
{'output': `kubectl rollout restart deployment <deploymentID>`},
],
//render
{'render': false}
],

// card ----------------------------------------------------- >
[
//html
[],
//css
[],
//js
[],
// output
[
{'comment': `types of services
  Cluster IP - sets up an easy-to-remember URL to access a pod, only exposes pods in the cluster
  Node Port - makes a pod accessible from outside the cluster, usually only used for dev purposes
  Load Balancer - makes a pod accessible from outside the cluster, correct way yo expose a pod to the outside world
  External Name - redirects an in-cluster request to a CNAME url`},

{'comment': `\ncomment`},
{'output': `output`},

],
//render
{'render': false}
],

// card ----------------------------------------------------- >
[
//html
[],
//css
[],
//js
[],
// output
[
{'comment': `ingress-nginx`},
{'output': `kubectl apply -f https://raw.githubusercontent.com/kubernetes/ingress-nginx/controller-v0.44.0/deploy/static/provider/cloud/deploy.yaml`},

],
//render
{'render': false}
],

]; 

module.exports = data;