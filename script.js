// script.js
const qaData = [
  {
    question: `1. What is Amazon EC2?`,
    answer: `Amazon EC2 (Elastic Compute Cloud) is a web service that provides resizable compute capacity in the cloud. It allows you to launch and manage virtual servers called instances.`
  },
  // Add more question-answer objects here
 {
    question: `2. What does EC2 stand for?`,
    answer: `EC2 stands for Elastic Compute Cloud.`
  },
  {
    question: `3. What is an EC2 instance?`,
    answer: `An EC2 instance is a virtual server in Amazon’s cloud used to run applications.`
  },
   {
    question: `4. What is an AMI?`,
    answer: `An Amazon Machine Image (AMI) is a pre-configured template used to create an EC2 instance. It includes the operating system, software, and configuration settings.
.`
  },
   {
    question: `5. What are the different types of EC2 instances?`,
    answer: `Common types are:

General Purpose (e.g., t2, t3)

Compute Optimized (e.g., c5)

Memory Optimized (e.g., r5)

Storage Optimized (e.g., i3)

Accelerated Computing (e.g., p3, g4)`
  },
   {
    question: `6. What is an instance type?`,
    answer: `Instance type defines the hardware configuration (CPU, memory, storage, network) of an EC2 instance.`
  },
  {
    question: `7. What is the default storage for EC2?`,
    answer: `EBS (Elastic Block Store) is the default persistent storage for EC2 instances.`
  },
  {
    question: `8. What is EBS?`,
    answer: `Amazon Elastic Block Store provides block-level storage volumes for use with EC2 instances.`
  },
  {
    question: `9. What is the difference between EBS and Instance Store?`,
    answer: `EBS: Persistent, data remains after instance termination.
            Instance Store: Temporary, data is lost when instance stops or terminates.`
  },
  {
    question: `10. What is a security group?`,
    answer: `A Security Group acts as a virtual firewall that controls inbound and outbound traffic to EC2 instances.`
  },
  {
    question: `11. What is a key pair in EC2?`,
    answer: `A key pair (public and private key) is used for secure SSH or RDP access to EC2 instances.`
  },
  {
    question: `12. What operating systems can we run on EC2?`,
    answer: `You can run Linux, Windows, and macOS operating systems.`
  },
  {
    question: `13. What is Elastic IP?`,
    answer: `An Elastic IP is a static IPv4 address that you can assign to your instance for consistent public access.`
  },
  {
    question: `14. What is user data in EC2?`,
    answer: `User Data is a script that runs automatically when an instance is launched, usually used for initial setup or configuration.`
  },
  {
    question: `15. How do you connect to a Linux EC2 instance?`,
    answer: `Using SSH (Secure Shell) and the .pem private key file.`
  },
  {
    question: `16. What is on-demand instance?`,
    answer: `An On-Demand Instance is pay-as-you-go; you pay for compute capacity by the hour or second without long-term commitment.`
  },
  {
    question: `17. What is a spot instance?`,
    answer: `Spot Instances let you use unused EC2 capacity at a lower price, but they can be interrupted when demand increases.`
  },
  {
    question: `18. What is a reserved instance?`,
    answer: `Reserved Instances offer discounted rates if you commit to using EC2 for 1 or 3 years.`
  },
  {
    question: `19. What is auto scaling?`,
    answer: `Auto Scaling automatically increases or decreases the number of instances based on demand.`
  },
  {
    question: `20. What is a load balancer?`,
    answer: `A Load Balancer distributes incoming network traffic across multiple EC2 instances to ensure high availability.`
  },
  {
    question: `21. What is the difference between Stop and Terminate in EC2?`,
    answer: `Stop: Shuts down the instance but retains the EBS volume.
            Terminate: Deletes the instance and associated EBS volumes (unless “Delete on Termination” is disabled).`
  },
  {
    question: `22. What are EC2 instance states?`,
    answer: `Pending → Running → Stopping → Stopped → Shutting-down → Terminated.`
  },
  {
    question: `23. What is the root device volume?`,
    answer: `The root device volume contains the image used to boot the instance (from AMI).`
  },
  {
    question: `24. Can you change the instance type after launching it?`,
    answer: `Yes, by stopping the instance, changing the instance type, and restarting it.`
  },
  {
    question: `25. What is placement group in EC2?`,
    answer: `Placement Groups are logical groupings of instances for specific network performance:
              Cluster: Low latency, high performance.
              Spread: Instances spread across hardware.
              Partition: Isolated hardware groups for large workloads..`
  },
  




  {
    question: `26. How does EC2 handle high availability?`,
    answer: `By launching instances in multiple Availability Zones (AZs) and using Auto Scaling and Load Balancing.`
  },
  {
    question: `27. What is the difference between public and private IP?`,
    answer: `Public IP: Accessible over the internet.
              Private IP: Used for internal communication within a VPC.`
  },
  {
    question: `28. What is EC2 metadata?`,
    answer: `Metadata provides information about the running instance (e.g., instance ID, IP, region).
              Access via: http://169.254.169.254/latest/meta-data/.`
  },
   {
    question: `29. What is EC2 monitoring?`,
    answer: `Using Amazon CloudWatch to track instance metrics like CPU usage, network traffic, and disk I/O..`
  },
   {
    question: `30. What is EC2 Hibernate?`,
    answer: `Hibernate saves the instance’s RAM data to disk and resumes faster when restarted, like sleep mode.`
  },
   {
    question: `31. What are EC2 launch templates?`,
    answer: `They define instance configuration (AMI, type, key pair, security groups) to simplify repeatable launches.`
  },

  {
    question: `32. What is an Elastic Network Interface (ENI)?`,
    answer: `An ENI is a virtual network interface that you can attach to an EC2 instance for networking flexibility.`
  },
   {
    question: `33. What is EC2 instance lifecycle?`,
    answer: `The process an instance goes through from creation → running → stopping → termination..`
  },
  {
    question: `34. Can you attach multiple EBS volumes to one EC2 instance?`,
    answer: `Yes, you can attach multiple EBS volumes to a single instance.`
  },
   {
    question: `35. What is the maximum number of security groups per instance?`,
    answer: `You can associate up to 5 security groups per network interface..`
  },
   {
    question: `36. What is the default limit for EC2 instances per region?
`,
    answer: `Typically 20 instances per region, but it can be increased by request.`
  },
   {
    question: `37. What are burstable performance instances?`,
    answer: `Instances like t2/t3 that accumulate CPU credits when idle and use them during high performance needs.`
  },
   {
    question: `38. How do you back up an EC2 instance?`,
    answer: `By creating an EBS Snapshot or AMI (machine image).`
  },
   {
    question: `39. What happens when an instance is terminated?`,
    answer: `The instance stops running, EBS volumes may be deleted, and data on instance store is lost.`
  },
  {
    question: `40. What is the difference between EC2 and Lambda?`,
    answer: `EC2: You manage servers and choose instance types.
              Lambda: Serverless, AWS manages everything; you just upload code.`
  },
   {
    question: `41. What is Amazon S3?`,
    answer: `Amazon S3 (Simple Storage Service) is an object storage service that allows you to store and retrieve data anytime from anywhere on the web.`
  },
   {
    question: `42. What does S3 stand for?`,
    answer: `S3 stands for Simple Storage Service.`
  },
   {
    question: `43. What is an S3 bucket?`,
    answer: `A bucket is a container for storing objects (files) in Amazon S3. It’s like a folder in the cloud.`
  },
   {
    question: `44. What is an S3 object?`,
    answer: `An object is a file and its metadata stored inside an S3 bucket..`
  },
   {
    question: `45. What are the different types of EC2 instances?`,
    answer: `Common types are:
            General Purpose (e.g., t2, t3)
            Compute Optimized (e.g., c5)
            Memory Optimized (e.g., r5)
            Storage Optimized (e.g., i3)
            Accelerated Computing (e.g., p3, g4).`
  },
  {
    question: `46. What is an instance type?`,
    answer: `Instance type defines the hardware configuration (CPU, memory, storage, network) of an EC2 instance.`
  },
  {
    question: `47. What is the default storage for EC2?`,
    answer: `EBS (Elastic Block Store) is the default persistent storage for EC2 instances.`
  },
   {
    question: `48. What is EBS?`,
    answer: `Amazon Elastic Block Store provides block-level storage volumes for use with EC2 instances.`
  },
   {
    question: `49. What is the difference between EBS and Instance Store?`,
    answer: `EBS: Persistent, data remains after instance termination.
              Instance Store: Temporary, data is lost when instance stops or terminates.`
   }, 
  {
    question: `50. What is a security group?`,
    answer: `A Security Group acts as a virtual firewall that controls inbound and outbound traffic to EC2 instances.`
  },
  




  {
    question: `51. What is a key pair in EC2?`,
    answer: `A key pair (public and private key) is used for secure SSH or RDP access to EC2 instances.`
  },
   {
    question: `52. What operating systems can we run on EC2?`,
    answer: `You can run Linux, Windows, and macOS operating systems.`
  },
   {
    question: `53. What is Elastic IP?
`,
    answer: `An Elastic IP is a static IPv4 address that you can assign to your instance for consistent public access.`
  },
   {
    question: `54. What is user data in EC2?
`,
    answer: `User Data is a script that runs automatically when an instance is launched, usually used for initial setup or configuration.`
  },
   {
    question: `55. How do you connect to a Linux EC2 instance?`,
    answer: `Using SSH (Secure Shell) and the .pem private key file.`
  },
  {
    question: `56. What is on-demand instance?`,
    answer: `An On-Demand Instance is pay-as-you-go; you pay for compute capacity by the hour or second without long-term commitment.`
  },
   {
    question: `57. What is a spot instance?`,
    answer: `Spot Instances let you use unused EC2 capacity at a lower price, but they can be interrupted when demand increases.`
  },
   {
    question: `58. What is a reserved instance?`,
    answer: `Reserved Instances offer discounted rates if you commit to using EC2 for 1 or 3 years..`
  },
   {
    question: `59. What is auto scaling?`,
    answer: `Auto Scaling automatically increases or decreases the number of instances based on demand..`
  },
   {
    question: `60. What is a load balancer?`,
    answer: `A Load Balancer distributes incoming network traffic across multiple EC2 instances to ensure high availability.`
  },
   {
    question: `61. What is the difference between Stop and Terminate in EC2?`,
    answer: `Stop: Shuts down the instance but retains the EBS volume.
              Terminate: Deletes the instance and associated EBS volumes (unless “Delete on Termination” is disabled).`
  },
  {
    question: `62. What are EC2 instance states?`,
    answer: `Pending → Running → Stopping → Stopped → Shutting-down → Terminated.`
  },
   {
    question: `63. What is the root device volume?`,
    answer: `The root device volume contains the image used to boot the instance (from AMI).`
  },
   {
    question: `64. Can you change the instance type after launching it?`,
    answer: `Yes, by stopping the instance, changing the instance type, and restarting it.`
  },
   {
    question: `65. What is placement group in EC2?
`,
    answer: `Placement Groups are logical groupings of instances for specific network performance:
              Cluster: Low latency, high performance.
              Spread: Instances spread across hardware.
              Partition: Isolated hardware groups for large workloads.`
  },
   {
    question: `66. How does EC2 handle high availability?`,
    answer: `By launching instances in multiple Availability Zones (AZs) and using Auto Scaling and Load Balancing.`
  },
  {
    question: `67. What is the difference between public and private IP?`,
    answer: ` Public IP: Accessible over the internet.
              Private IP: Used for internal communication within a VPC.`
  },
   {
    question: `68. What is EC2 metadata?`,
    answer: `Metadata provides information about the running instance (e.g., instance ID, IP, region).
Access via: http://169.254.169.254/latest/meta-data/.`
  },
   {
    question: `69. What is EC2 monitoring?`,
    answer: `Using Amazon CloudWatch to track instance metrics like CPU usage, network traffic, and disk I/O..`
  },
   {
    question: `70. What is EC2 Hibernate?`,
    answer: `Hibernate saves the instance’s RAM data to disk and resumes faster when restarted, like sleep mode.`
  },
   {
    question: `71. What are EC2 launch templates?`,
    answer: `They define instance configuration (AMI, type, key pair, security groups) to simplify repeatable launches.`
  },
   {
    question: `72. What is an Elastic Network Interface (ENI)?`,
    answer: `An ENI is a virtual network interface that you can attach to an EC2 instance for networking flexibility.`
  },
  {
    question: `73. What is EC2 instance lifecycle?`,
    answer: `The process an instance goes through from creation → running → stopping → termination.`
  },
   {
    question: `74. Can you attach multiple EBS volumes to one EC2 instance?`,
    answer: `Yes, you can attach multiple EBS volumes to a single instance.`
  },
   {
    question: `75. What is the maximum number of security groups per instance?`,
    answer:  `You can associate up to 5 security groups per network interface.`
  },
  
  
  
  
  
  
  {
    question: `76. What is the default limit for EC2 instances per region?`,
    answer: `Typically 20 instances per region, but it can be increased by request.`
  },
   {
    question: `77. What are burstable performance instances?`,
    answer: ` Instances like t2/t3 that accumulate CPU credits when idle and use them during high performance needs.`
  },
   {
    question: `78. How do you back up an EC2 instance?.`,
    answer: `By creating an EBS Snapshot or AMI (machine image).`
  },
  {
    question: `79. What happens when an instance is terminated?`,
    answer: `The instance stops running, EBS volumes may be deleted, and data on instance store is lost.`
  },
   {
    question: `80. What is the difference between EC2 and Lambda?`,
    answer: `EC2: You manage servers and choose instance types.
            Lambda: Serverless, AWS manages everything; you just upload code.`
  },
   {
    question: `81. What is Amazon S3?`,
    answer: `Amazon S3 (Simple Storage Service) is an object storage service that allows you to store and retrieve data anytime from anywhere on the web.`
  },
   {
    question: `82. What does S3 stand for?`,
    answer: `S3 stands for Simple Storage Service.`
  },
   {
    question: `83. What is an S3 bucket?`,
    answer: `A bucket is a container for storing objects (files) in Amazon S3. It’s like a folder in the cloud.`
  },
   {
    question: `84. What is an S3 object?`,
    answer: `An object is a file and its metadata stored inside an S3 bucket.`
  },
  {
    question: `85. What is the maximum size of a single S3 object?`,
    answer: `Each S3 object can be up to 5 TB in size.`
  },
   {
    question: `86. What is the maximum number of buckets per AWS account?`,
    answer: `You can create up to 100 buckets per AWS account (by default).`
  },
  {
    question: `87. How is data stored in S3??`,
    answer: `Data is stored as objects within buckets. Each object has a key (name), value (data), and metadata.`
  },
   {
    question: `88. What is an S3 key?`,
    answer: `The key is the unique name that identifies an object within a bucket.`
  },
   {
    question: `89. What are the different storage classes in S3?`,
    answer: `S3 Standard
              S3 Intelligent-Tiering
              S3 Standard-IA (Infrequent Access)
              S3 One Zone-IA
              S3 Glacier
              S3 Glacier Deep Archive.`
  },
   {
    question: `90. What is S3 Standard?`,
    answer: `S3 Standard is the default storage class, used for frequently accessed data with high durability and availability.`
  },
   {
    question: `91. What is the durability of S3?`,
    answer: `S3 provides 99.999999999% (11 nines) durability.`
  },
   {
    question: `92. What is the availability of S3?`,
    answer: `S3 offers 99.99% availability.`
  },
  {
    question: `93. What is S3 versioning?`,
    answer: `Versioning keeps multiple versions of an object in the same bucket, protecting against accidental overwrites or deletions.`
  },
   {
    question: `94. Can S3 store folders?`,
    answer: `Not really — S3 is flat (no folders). “Folders” are simulated using prefixes in object names.`
  },
   {
    question: `95. How can you upload files to S3?`,
    answer: `You can upload files using the AWS Management Console, AWS CLI, or SDKs (like Python Boto3).`
  },
   {
    question: `96. What is an S3 URL?`,
    answer: `An S3 URL is a unique web address used to access an object, such as:
https://bucket-name.s3.amazonaws.com/object-name.`
  },
   {
    question: `97. What is an S3 bucket policy?`,
    answer: `A bucket policy defines who can access your bucket and what actions they can perform.`
  },
   {
    question: `98. Can you host a static website on S3?`,
    answer: `Yes, S3 can host static websites (HTML, CSS, JavaScript).`
  },
  {
    question: `99. What is S3 Lifecycle Management?`,
    answer: `It automatically moves data between storage classes or deletes old data based on defined rules.`
  },
   {
    question: `100. What is the difference between S3 and EBS?`,
    answer: `S3: Object storage (used for files, backups, static websites).
              EBS: Block storage (used for EC2 instances, databases).`
  },
  




  {
    question: `101. What is S3 Intelligent-Tiering?`,
    answer: `It automatically moves data between frequent and infrequent access tiers to reduce costs.`
  },
   {
    question: `102. What is S3 Glacier?`,
    answer: `S3 Glacier is a low-cost storage class for archiving data that is rarely accessed. Retrieval time varies from minutes to hours.`
  },
   {
    question: `103. What is S3 Glacier Deep Archive?`,
    answer: `An even cheaper storage option for data that is rarely accessed — ideal for long-term archiving (retrieval time: 12–48 hours).`
  },
   {
    question: `104. What is S3 cross-region replication (CRR)?`,
    answer: `CRR automatically copies objects across different AWS regions for disaster recovery or compliance.`
  },
  {
    question: `105. What is S3 same-region replication (SRR)?`,
    answer: `SRR replicates data between buckets within the same region, often used for data backup or logging.`
  },
   {
    question: `106. What is the difference between S3 ACLs and Bucket Policies?`,
    answer: ` ACLs (Access Control Lists): Control permissions at the object or bucket level.
              Bucket Policies: JSON-based rules that define access for users or services.`
  },
  {
    question: `107. What is S3 Transfer Acceleration?`,
    answer: `It speeds up file uploads using Amazon CloudFront’s global edge locations.`
  },
   {
    question: `108. What is S3 Event Notification?`,
    answer: `It triggers an event (like SNS, SQS, or Lambda) when an action occurs, e.g., when a new object is uploaded.`
  },
   {
    question: `109. What are S3 pre-signed URLs?`,
    answer: `A pre-signed URL gives temporary access to a private object without making it public.`
  },
   {
    question: `110. What is the difference between S3 and Glacier?`,
    answer: `S3: For frequently accessed data.
            Glacier: For long-term, rarely accessed data.`
  },
   {
    question: `111. What is S3 object lock?`,
    answer: `It prevents objects from being deleted or modified for a fixed retention period — used for compliance.`
  },
   {
    question: `112. What is S3 Select?`,
    answer: `S3 Select lets you query specific data from objects (like CSV or JSON) using SQL-like queries without downloading the whole file.`
  },
  {
    question: `113. What is S3 Access Point?`,
    answer: `An Access Point provides unique access URLs and permissions for specific applications or users accessing a shared bucket.`
  },
   {
    question: `114. What is S3 encryption?`,
    answer: `Encryption secures your data. Types include:
              SSE-S3 (Managed by AWS)
              SSE-KMS (Managed by KMS)
              SSE-C (Customer-provided keys)
              Client-side encryption.`
  },
   {
    question: `115. What is multipart upload in S3?`,
    answer: `For large files, multipart upload splits the file into smaller parts and uploads them in parallel for speed and reliability.`
  },
   {
    question: `116. What is S3 replication time control (RTC)?`,
    answer: `It ensures that objects are replicated to another region within 15 minutes.`
  },
   {
    question: `117. What is S3 storage class analysis?`,
    answer: `It helps you identify data access patterns to optimize lifecycle rules and cost.`
  },
   {
    question: `118. How can you secure S3 data?`,
    answer: `Enable encryption
              Use IAM policies
              Apply bucket policies
              Enable MFA delete
              Disable public access.`
  },
  {
    question: `119. What is MFA delete in S3?`,
    answer: `It requires multi-factor authentication (MFA) to permanently delete objects or disable versioning — adds extra protection.`
  },
   {
    question: `120. What monitoring tools are available for S3?`,
    answer: `AWS CloudWatch – for metrics and alerts
              AWS CloudTrail – for logging API activity
              S3 Storage Lens – for usage and cost insights
.`
  },
   {
    question: `121. What is IAM in AWS?`,
    answer: ` It's used to track the actual state of thAWS Identity and Access Management (IAM) is a service that helps you securely control who can access AWS resources and what actions they can perform.`
  },
   {
    question: `122. What does IAM stand for?`,
    answer: `IAM stands for Identity and Access Management.`
  },
   {
    question: `123. Is IAM a global or regional service?`,
    answer: `IAM is a global service — it’s not specific to any region.`
  },
   {
    question: `124. What is an IAM user?`,
    answer: `An IAM user is an individual identity created in AWS to represent a person or application that interacts with AWS resources.`
  },
  {
    question: `125. What is an IAM group?`,
    answer: `An IAM group is a collection of IAM users. You can assign permissions to a group instead of each user individually.`
  },
 
  
  
  {
    question: `126. What is an IAM role?`,
    answer: `An IAM role is an identity with permissions that can be assumed by users, applications, or AWS services temporarily.`
  },
  {
    question: `127. What are IAM policies?`,
    answer: `Policies are JSON documents that define permissions — what actions are allowed or denied on specific AWS resources.`
  },
   {
    question: `128. What is the root user in AWS?`,
    answer: `The root user is the account owner (created when you sign up for AWS). It has full access to all AWS services and resources.`
  },
   {
    question: `129. What is the difference between root user and IAM user?`,
    answer: `Root user: Has unrestricted access.
            IAM user: Has limited access based on assigned policies.`
  },
   {
    question: `130. What are permissions in IAM?`,
    answer: `Permissions define what actions a user or role can perform on AWS resources.`
  },
   {
    question: `131. What is the default permission for a new IAM user?`,
    answer: `By default, new IAM users have no permissions until explicitly granted.`
  },
   {
    question: `132. What are managed policies?`,
    answer: `Managed policies are pre-built permission sets provided by AWS or created by users that can be attached to multiple users, groups, or roles.`
  },
  {
    question: `133. What are inline policies?`,
    answer: `Inline policies are directly embedded within a single user, group, or role — not reusable elsewhere.`
  },
   {
    question: `134. What is the IAM policy structure?`,
    answer: `A policy is a JSON document containing:
              Version
              Statement
              Effect (Allow/Deny)
              Action
              Resource.`
  },
   {
    question: `135. What is multi-factor authentication (MFA)?`,
    answer: `MFA adds an extra layer of security by requiring a password and a temporary verification code (from a device or app).`
  },
   {
    question: `136. What is the principle of least privilege?`,
    answer: `It means giving users only the permissions they need to perform their tasks — nothing more.`
  },
   {
    question: `137. How do you access IAM?`,
    answer: `Through:
              AWS Management Console
              AWS CLI
              AWS SDKs
              IAM API.`
  },
   {
    question: `138. Can one IAM user have multiple access keys?`,
    answer: `Yes — each IAM user can have two active access keys at a time.`
  },
  {
    question: `139. What are IAM access keys used for?`,
    answer: `Access keys (Access Key ID + Secret Key) are used for programmatic access (via CLI, SDKs, or APIs).`
  },
   {
    question: `140. What is a password policy in IAM?`,
    answer: `It defines rules for password complexity, length, and expiration to enhance account security.`
  },
   {
    question: `141. What is the difference between IAM roles and IAM users?`,
    answer: `IAM user: Has long-term credentials.
              IAM role: Used for temporary access and can be assumed by services or users..`
  },
   {
    question: `142. What is IAM federation?`,
    answer: ` Federation allows users from an external identity system (like Google, Azure AD, or corporate AD) to access AWS resources without creating separate IAM users.`
  },
   {
    question: `143. What is an assume role policy?`,
    answer: `It defines who (principal) can assume a role and under what conditions.`
  },
   {
    question: `144. What is an IAM trust policy?`,
    answer: `A trust policy specifies which entities (users, services, or accounts) are allowed to assume a role.`
  },
  {
    question: `145. What is the difference between identity-based and resource-based policies?`,
    answer: `Identity-based: Attached to users, groups, or roles.
              Resource-based: Attached directly to resources (e.g., S3 bucket policies).`
  },
   {
    question: `146. What is a policy simulator in IAM?`,
    answer: ` It’s a tool that allows you to test and troubleshoot IAM policies before applying them.`
  },
  {
    question: `147. What is IAM Access Analyzer?`,
    answer: `Access Analyzer helps identify resources (like S3 buckets or IAM roles) that are shared publicly or across accounts.`
  },
   {
    question: `148. What are service-linked roles?`,
    answer: `Service-linked roles are predefined roles linked directly to an AWS service, giving it permissions to manage resources on your behalf.`
  },
   {
    question: `149. What is the difference between AWS-managed and customer-managed policies?`,
    answer: `AWS-managed: Created and maintained by AWS.
              Customer-managed: Created and customized by the user.`
  },
   {
    question: `150. What are IAM credentials reports?`,
    answer: `A credentials report lists all IAM users and the status of their credentials (passwords, access keys, MFA, etc.).`
  },
  
 
 
  {
    question: `151. What is IAM access advisor?`,
    answer: `It shows which services a user or role has accessed and helps identify unused permissions.`
  },
   {
    question: `152. Can IAM roles be assumed across AWS accounts?`,
    answer: `Yes — through cross-account roles, allowing access between different AWS accounts.`
  },
  {
    question: `153. What is temporary security credential?`,
    answer: `It’s a short-lived set of credentials generated via STS (Security Token Service), often used by IAM roles.`
  },
   {
    question: `154. What is AWS STS (Security Token Service)?`,
    answer: `STS issues temporary credentials for users or applications to access AWS resources securely.`
  },
   {
    question: `155. What is IAM best practice for AWS root user?`,
    answer: `Don’t use it for daily tasks.
              Enable MFA.
              Create admin IAM users instead.
              Secure the root credentials..`
  },
   {
    question: `156. What is resource-based trust policy?`,
    answer: `It defines who can access a specific AWS resource, like S3 bucket or Lambda function, directly from that resource.`
  },
   {
    question: `157. What happens if an IAM policy has both “Allow” and “Deny”?`,
    answer: `Explicit Deny always overrides any Allow.`
  },
   {
    question: `158. What is IAM JSON policy evaluation logic?`,
    answer: `AWS evaluates policies in this order:
              Deny by default
              Evaluate explicit “Allow”
              Evaluate explicit “Deny” → takes precedence.`
  },
  {
    question: `159. What is AWS Organizations, and how does it relate to IAM?`,
    answer: `AWS Organizations lets you manage multiple AWS accounts centrally.
              It works with IAM to apply service control policies (SCPs) across accounts..`
  },
   {
    question: `160. What are IAM tagging and permissions boundaries?`,
    answer: `Tags: Add metadata (like department or project) to IAM users/roles.
              Permissions boundaries: Define maximum permissions an IAM entity can have.
             Pro Tip for Freshers:
              In interviews, focus on explaining key IAM concepts like:
              Least privilege
              Difference between user, role, and group
              Policy structure
              MFA and security best practices
              Temporary credentials (STS)  .`
  },
   {
    question: `161. What is AWS Lambda?`,
    answer: `AWS Lambda is a serverless compute service that lets you run code without managing servers. You only pay for the compute time your code uses.`
  },
   {
    question: `162. What does “serverless” mean?`,
    answer: `“Serverless” means you don’t have to manage servers — AWS automatically handles provisioning, scaling, and maintenance.`

  },
  {
    question: `163. What languages are supported by Lambda?`,
    answer: ` Lambda supports:
              Python
              Node.js
              Java
              C# (.NET Core)
              Go
              Ruby
              PowerShell
              Custom runtimes (via container images).`
  },
   {
    question: `164. What is a Lambda function?`,
    answer: `A Lambda function is your code plus its configuration that runs in response to events (like an S3 upload or an API call).`
  },
   {
    question: `165. How do you trigger a Lambda function?`,
    answer: `You can trigger Lambda from:
              S3 (object upload)
              API Gateway
              SNS / SQS
              CloudWatch Events
              DynamoDB Streams
              EventBridge, etc.`
  },
   {
    question: `166. How do you create a Lambda function?`,
    answer: `Through:
              AWS Management Console
              AWS CLI
              AWS SDKs
              Infrastructure as Code (like CloudFormation or Terraform).`
  },
   {
    question: `167. What is the maximum execution time for a Lambda function?`,
    answer: `The maximum timeout for a Lambda function is 15 minutes (900 seconds).`
  },
   {
    question: `168. What is the default memory allocation in Lambda?`,
    answer: `The default is 128 MB, and it can be increased up to 10,240 MB (10 Gb).`
  },
  {
    question: `169. What are the main components of AWS Lambda?`,
    answer: `Function code
              Handler
              Trigger (event source)
              Execution role (IAM)
              Environment variables.`
  },
   {
    question: `170. What is an event in AWS Lambda?`,
    answer: `An event is data passed to a Lambda function to trigger it, like an S3 object upload or an API request.`
  },
   {
    question: `171. What is the handler in Lambda?`,
    answer: ` A handler is the entry point in your code where execution begins.
                Example: handler(event, context). `
  },
   {
    question: `172. What is the context object?`,
    answer: `It provides runtime information about the Lambda function (like request ID, timeout, and memory limit).`
  },
   {
    question: `173. How is Lambda priced?`,
    answer: `You pay for:
              Number of requests
              Execution time (duration)
              Pricing is based on GB-seconds used. `
  },
   {
    question: `174. What are Lambda Layers?`,
    answer: `Layers are used to share common code, libraries, or dependencies across multiple Lambda functions.  `
  },
  {
    question: `175. What are Lambda environment variables?`,
    answer: `Key-value pairs that store configuration data (like database URLs or API keys) accessible within the Lambda function.`
  },
  




  {
    question: `176. What is AWS X-Ray in Lambda?`,
    answer: `AWS X-Ray helps you trace and analyze requests to understand Lambda’s performance and identify bottlenecks or errors.`
  },
  
 {
    question: `177. What are cold starts in Lambda? `,
    answer: ` A cold start occurs when Lambda initializes a new execution environment — it takes slightly longer than warm invocations.`
  },
   {
    question: `178. What is a warm start in Lambda?`,
    answer: ` A warm start happens when AWS reuses an existing execution environment — making the function run faster.`
  },
   {
    question: `179. Can Lambda functions access VPC resources?`,
    answer: `Yes, Lambda can connect to a VPC by configuring VPC settings (subnets, security groups) in the function settings.`
  },
   {
    question: `180. What are the key benefits of AWS Lambda?`,
    answer: `No server management
              Automatic scaling
              Pay only for execution time
              Easy integration with other AWS services
              High availability and fault tolerance.`
  },
   {
    question: `181. What is the difference between EC2 and Lambda?`,
    answer: `EC2: You manage servers, OS, scaling, and availability.
              Lambda: Fully managed and serverless — you just deploy code.`
  },
   {
    question: `182. What is an event source mapping in Lambda`,
    answer: `It’s a configuration that connects Lambda to stream-based services (like DynamoDB Streams or SQS) to automatically trigger functions.`
  },
  {
    question: `183. What is concurrency in AWS Lambda?`,
    answer: `Concurrency is the number of function instances running at the same time. AWS automatically manages this based on requests.`
  },
   {
    question: `184. What is reserved concurrency?`,
    answer: `It guarantees a fixed number of concurrent executions for a specific function, ensuring availability.`
  },
   {
    question: `185. What is provisioned concurrency?`,
    answer: `It keeps a number of Lambda instances pre-initialized, reducing cold start latency for high-performance apps.`
  },
   {
    question: `186. How does Lambda handle scaling?`,
    answer: `Lambda automatically scales by running multiple instances of your function in response to the number of incoming events.`
  },
   {
    question: `187. What are the deployment packages in Lambda?`,
    answer: `A deployment package is a ZIP file or container image that includes your function code and dependencies.`
  },
   {
    question: `188. What is the maximum size of a deployment package?`,
    answer: `ZIP file (direct upload): 50 MB
              ZIP from S3: 250 MB
              Container image: Up to 10 GB.`
  },
  {
    question: `189. What is Lambda@Edge?`,
    answer: `Lambda@Edge runs Lambda functions closer to users at AWS CloudFront edge locations — useful for low-latency content delivery.`
  },
   {
    question: `190. What is the difference between synchronous and asynchronous Lambda invocation?
`,
    answer: `Synchronous: The caller waits for the result (e.g., API Gateway).
              Asynchronous: The event is queued, and Lambda runs in the background (e.g., S3, SNS).`
  },
   {
    question: `191. What are Dead Letter Queues (DLQ) in Lambda?`,
    answer: `DLQs (using SNS or SQS) store failed Lambda events for later debugging or reprocessing..`
  },
   {
    question: `192. How can you secure your Lambda function?`,
    answer: `Use IAM roles for permissions
              Enable VPC access for private data
              Use environment variable encryption (KMS)
              Apply least privilege principle`
  },
   {
    question: `193. What is a Lambda destination?`,
    answer: `Destinations define what happens after a function’s success or failure — sending results to SNS, SQS, or EventBridge.`
  },
   {
    question: `194. How do you monitor Lambda functions?`,
    answer: `Using:
                Amazon CloudWatch (metrics & logs)
                AWS X-Ray (tracing)
                AWS CloudTrail (API calls).`
  },
  {
    question: `195. What is the AWS Lambda execution role?`,
    answer: `It’s an IAM role that grants your function permission to access other AWS services (like S3, DynamoDB, etc.).`
  },
   {
    question: `196. How does Lambda handle errors?`,
    answer: `Automatically retries for asynchronous invocations
              Logs errors in CloudWatch Logs
              Supports DLQ and error handling destinations.`
  },
  
 {
    question: `197. What are Lambda container images?`,
    answer: `Lambda can run functions packaged as container images (up to 10 GB), built with Docker.`
  },
   {
    question: `198. What is the maximum payload size in AWS Lambda?`,
    answer: `Synchronous: 6 MB
              Asynchronous (event): 256 KB
              Through API Gateway: 10 MB.`
  },
   {
    question: `199. What is Step Functions in AWS Lambda?`,
    answer: `Step Functions coordinate multiple Lambda functions into workflows — managing sequence, retries, and state transitions.`
  },
   {
    question: `200. How can you reduce Lambda cold start time?`,
    answer: `Use Provisioned Concurrency
              Keep package size small
              Reuse connections outside the handler
              Choose lighter runtimes (Node.js, Python)

.`
  },
  {
    question: `Questions Done`,
    answer: `✅ Pro Tip for Freshers:
                  When explaining Lambda in interviews:
                  Emphasize it’s event-driven and serverless
                  Highlight cost efficiency & automatic scaling
                  Be ready to explain a use case (like resizing an image when uploaded to S3).`
  },
  
  
  {
    question: `201. What is an Elastic Load Balancer (ELB)?`,
    answer: `ELB is a service that automatically distributes incoming traffic across multiple targets (like EC2 instances) to ensure high availability and reliability of applications.`
  },
   {
    question: `202. Why do we use Load Balancers in AWS?`,
    answer: `To distribute traffic evenly, avoid overload on a single server, and improve application performance and fault tolerance.`
  },
  {
    question: `203. What are the types of Load Balancers in AWS?`,
    answer: `Classic Load Balancer (CLB)
              Application Load Balancer (ALB)
              Network Load Balancer (NLB)
              Gateway Load Balancer (GWLB).`
  },
   {
    question: `204. Which Load Balancer operates at Layer 7 of the OSI model?`,
    answer: `The Application Load Balancer (ALB).`
  },
   {
    question: `205. Which Load Balancer operates at Layer 4??`,
    answer: `The Network Load Balancer (NLB).`
  },
   {
    question: `206. What is a Target Group in ELB?`,
    answer: `A target group is a collection of EC2 instances or IPs that receive traffic from a load balancer.`
  },
   {
    question: `207. What is a Health Check in ELB?`,
    answer: ` A test performed by the ELB to check whether targets (EC2 instances) are healthy and ready to receive traffic.`
  },
   {
    question: `208. What happens if a target fails a health check?`,
    answer: `The ELB stops sending traffic to that target until it becomes healthy again.`
  },
  {
    question: `209. Can a Load Balancer handle traffic across multiple Availability Zones?`,
    answer: `Yes. ELB can distribute traffic across instances in multiple Availability Zones for high availability.`
  },
   {
    question: `210. What are Listeners in ELB?`,
    answer: `Listeners are processes that check for incoming connection requests using a specific protocol and port.`
  },
   {
    question: `211. What is Cross-Zone Load Balancing?`,
    answer: `It allows the ELB to evenly distribute traffic across all registered instances in all enabled Availability Zones.`
  },
   {
    question: `212. What is Connection Draining (Deregistration Delay)?`,
    answer: `It ensures that existing connections are completed before the instance is deregistered or terminated.`
  },
   {
    question: `213. Can ELB support HTTPS traffic?`,
    answer: `Yes, by adding an SSL certificate to handle HTTPS requests.`
  },
   {
    question: `214. What is Sticky Session (Session Affinity)?`,
    answer: ` It allows a user’s session to be consistently routed to the same target instance.`
  },
  {
    question: `215. How does ELB improve fault tolerance?`,
    answer: `By automatically routing traffic only to healthy instances across multiple AZs`
  },
   {
    question: `216. Can you attach security groups to an ELB?`,
    answer: `Yes, for Application and Classic Load Balancers (not for NLBs).`
  },
  {
    question: `217. What is the difference between CLB and ALB?`,
    answer: ` CLB works at Layer 4 and 7 (legacy), while ALB is modern and works purely at Layer 7 with advanced routing.`
  },
   {
    question: `218. What are the supported protocols in ELB?`,
    answer: ` HTTP, HTTPS, TCP, UDP, and TLS.`
  },
   {
    question: `219. Can ELB integrate with Auto Scaling?`,
    answer: `Yes, it automatically adds or removes instances as per scaling rules and health checks.`
  },
   {
    question: `220. What is the benefit of using ELB?`,
    answer: `It ensures scalability, fault tolerance, and better performance for web applications.`
  },
   {
    question: `221. What is the difference between Application Load Balancer (ALB) and Network Load Balancer (NLB)?`,
    answer: `ALB handles HTTP/HTTPS (Layer 7) traffic with advanced routing; NLB handles TCP/UDP (Layer 4) for high performance and low latency.`
  },
   {
    question: `222. What is Path-Based Routing in ALB?`,
    answer: ` It routes requests based on the URL path — for example, /images goes to one target group, /api to another.`
  },
  {
    question: `223. What is Host-Based Routing in ALB?`,
    answer: `It routes traffic based on domain names — e.g., api.example.com to one target group, app.example.com to another.`
  },
   {
    question: `224. What is a Listener Rule?`,
    answer: `It defines how a load balancer routes traffic based on conditions like host headers or paths..`
  },
   {
    question: `225. What is SSL Termination?`,
    answer: `It’s when the load balancer decrypts HTTPS traffic before sending it to the target instances.`
  },
  
 



  {
    question: `226. How can you monitor ELB performance?`,
    answer: `Using Amazon CloudWatch metrics such as RequestCount, Latency, and HealthyHostCount.`
  },
   {
    question: `227. What is the purpose of an idle timeout in ELB?`,
    answer: `It determines how long a connection can remain idle before being closed.`
  },
   {
    question: `228. How do you enable HTTPS in ALB?`,
    answer: `By attaching an SSL certificate via AWS Certificate Manager (ACM) and setting up a listener on port 443.`
  },
  {
    question: `229. Can ELB handle traffic for on-premises servers?`,
    answer: `Yes, via IP-based target groups (Hybrid Architecture).`
  },
   {
    question: `230. How can you restrict access to ELB?`,
    answer: `By configuring Security Groups or AWS WAF (Web Application Firewall) with ALB.`
  },
   {
    question: `231. What is Deregistration Delay in ALB/NLB?`,
    answer: `It’s the time an instance continues to serve existing connections before being removed from the target group.`
  },
   {
    question: `232. What is Access Logging in ELB?`,
    answer: `It records detailed logs about requests sent to your load balancer, stored in S3.`
  },
   {
    question: `233. How does NLB achieve high performance?`,
    answer: `By using static IPs and operating at Layer 4 for millions of requests per second.`
  },
   {
    question: `234. What is the Gateway Load Balancer (GWLB)?`,
    answer: `It allows you to deploy, scale, and manage third-party virtual appliances like firewalls.`
  },
  {
    question: `235. Can we attach static IPs to a Load Balancer?`,
    answer: `Yes, Network Load Balancers support Elastic IPs.`
  },
   {
    question: `236. How does ELB integrate with Auto Scaling Groups?`,
    answer: ` The ELB automatically updates target groups as instances are added or removed by Auto Scaling.`
  },  
 {
    question: `237. What is Target Group Stickiness?`,
    answer: `It ensures requests from the same client are routed to the same target for a specified duration.`
  },
   {
    question: `238. How do you enable Cross-Zone Load Balancing?`,
    answer: `It can be enabled in the ELB settings (on by default for ALB, optional for NLB).`
  },
   {
    question: `239. What happens if all targets in a target group fail health checks?`,
    answer: ` The ELB returns a 503 Service Unavailable error to clients.`
  },
   {
    question: `240. How does ELB contribute to application scalability?`,
    answer: `It distributes traffic dynamically as new instances are launched, ensuring smooth scaling under varying load.`
  },
   {
    question: `241. What is Amazon Route 53?`,
    answer: ` The number 53 refers to the port number used by the DNS protocol (port 53).`
  },
   {
    question: `242. What does “53” stand for in Route 53?`,
    answer: `The caching feature allows you to store certain directories in Amazon S3 to speed up build times. CodeBuild can fetch cached content instead of rebuilding dependencies, improving overall build performance.`
  },
  {
    question: `243. What are the main functions of Route 53?`,
    answer: `Domain registration
              DNS routing
              Health checking and failover.`
  },
   {
    question: `244. What is a Hosted Zone in Route 53?`,
    answer: `Public Hosted Zone: For internet-accessible domains.
              Private Hosted Zone: For internal DNS resolution within a VPC.`
  },
   {
    question: `245. What are the types of Hosted Zones?`,
    answer: `Artifacts are the output files generated by the build process. They can be binaries, archives, or any other build output. These artifacts can be stored in Amazon S3 or other destinations for later use.`
  },
   {
    question: `246. What is a DNS Record?`,
    answer: ` A DNS record is an entry in Route 53 that maps a domain name to an IP address or another resource.`
  },
   {
    question: `247. What are some common DNS record types in Route 53?.`,
    answer: `A (IPv4 address)
              AAAA (IPv6 address)
              CNAME (Alias)
              MX (Mail Exchange)
              TXT (Text)
              NS (Name Server).`
  },
   {
    question: `248. What is an Alias Record in Route 53?`,
    answer: `It’s a special record type used to map your domain name to AWS resources like ELB, CloudFront, or S3.`
  },
  {
    question: `249. What is TTL (Time to Live) in Route 53?`,
    answer: `TTL defines how long DNS resolvers cache the record before requesting an update.`
  },
   {
    question: `250. Can Route 53 register domain names?`,
    answer: `Yes, Route 53 provides domain registration services for many TLDs (like .com, .org, .in, etc.).`
  },
  
 
  
  
  
  {
    question: `251. What is the difference between CNAME and Alias Record?`,
    answer: `CNAME maps one domain name to another, while Alias can map to AWS resources and supports root domains.`
  },
   {
    question: `252. What is a Health Check in Route 53?`,
    answer: `It monitors the health of your endpoints and helps Route 53 route traffic only to healthy resources.`
  },
   {
    question: `253. How does Route 53 ensure high availability?`,
    answer: `It automatically routes traffic to healthy resources and uses globally distributed DNS servers.`
  },
   {
    question: `254. Can Route 53 route traffic between AWS and non-AWS resources??`,
    answer: ` Yes, it can route traffic to any internet-accessible IP or domain name.`
  },
  {
    question: `255. What is Latency-Based Routing?`,
    answer: `It routes traffic to the AWS region with the lowest network latency for the user.`
  },
   {
    question: `256. What is Weighted Routing?`,
    answer: `It allows you to distribute traffic based on assigned weights to different resources.`
  },
  {
    question: `257. What is Failover Routing?`,
    answer: `It automatically redirects traffic to a backup resource when the primary resource becomes unhealthy.`
  },
   {
    question: `258. What is Geolocation Routing?`,
    answer: `It routes traffic based on the user’s geographic location (like country or continent).`
  },
   {
    question: `259. Can Route 53 integrate with CloudFront?`,
    answer: `Yes, you can use Alias records to point your domain directly to a CloudFront distribution.`
  },
   {
    question: `260. What are NS Records in Route 53?.`,
    answer: `NS (Name Server) records identify the authoritative DNS servers for a domain.`
  },
   {
    question: `261. What is the difference between Latency-Based and Geolocation Routing?`,
    answer: `Latency-Based: Routes based on response time (speed).
              Geolocation: Routes based on user’s physical location.`
  },
   {
    question: `262. How does Route 53 achieve fault tolerance?`,
    answer: `By using health checks and failover routing policies to automatically switch to healthy endpoints.`
  },
  {
    question: `263. What is a DNS Failover?`,
    answer: `It’s the ability of Route 53 to detect unhealthy endpoints and route traffic to a backup automatically.`
  },
   {
    question: `264. What are the Routing Policies supported by Route 53?`,
    answer: `Simple
              Weighted
              Latency-Based
              Failover
              Geolocation
              Geoproximity
              Multi-Value Answer.`
  },
   {
    question: `265. What is Simple Routing Policy?`,
    answer: `It maps a domain name to a single resource (like one EC2 instance or ELB).`
  },
   {
    question: `266. What is Multi-Value Answer Routing?`,
    answer: ` It returns multiple healthy IP addresses to DNS queries to help with load distribution.`
  },
   {
    question: `267. What is Geoproximity Routing?.`,
    answer: `It routes traffic based on geographic proximity of users and can bias routing towards certain regions.`
  },
   {
    question: `268. Can you use Route 53 for internal DNS in a VPC?`,
    answer: ` Yes, by creating a Private Hosted Zone associated with your VPC.`
  },
  {
    question: `269. How does Route 53 Health Check work?`,
    answer: `It sends periodic requests to endpoints (like HTTP or TCP) and marks them healthy or unhealthy based on response.`
  },
   {
    question: `270. Can Route 53 route traffic to multiple AWS regions?`,
    answer: `Yes, using Latency-Based or Weighted routing across regions.`
  },
   {
    question: `271. How does Route 53 integrate with ELB (Elastic Load Balancer)?`,
    answer: `You can create an Alias Record that points your domain directly to the ELB DNS name.`
  },
   {
    question: `272. Can Route 53 be used as a private DNS server?`,
    answer: `Yes, by using Private Hosted Zones within Amazon VPC.`
  },
   {
    question: `273. How does Route 53 handle DNS caching?`,
    answer: `Resolvers cache DNS records for the duration of their TTL (Time to Live) value.`
  },
   {
    question: `274. What is the purpose of SOA (Start of Authority) record?`,
    answer: `It provides information about the domain, such as the primary DNS server and refresh intervals.`
  },
  {
    question: `275. How can Route 53 be secured??`,
    answer: `By using IAM policies for DNS management and enabling DNSSEC (Domain Name System Security Extensions).`
  },
  


  {
    question: `276. What is DNSSEC in Route 53?`,
    answer: `It adds cryptographic signatures to DNS data to prevent spoofing and attacks.`
  },
  {
    question: `277. How do you monitor Route 53 performance?`,
    answer: `Using Amazon CloudWatch metrics like Health Check Status and DNS Queries.`
  },
   {
    question: `278. Can Route 53 handle hybrid cloud routing?`,
    answer: `Yes, it can route traffic between AWS resources and on-premises environments using IP-based targets.`
  },
   {
    question: `279. What are Route 53 Traffic Flow Policies?`,
    answer: ` Traffic Flow lets you visualize and manage complex routing configurations using a graphical console.`
  },
   {
    question: `280. What happens if all endpoints in a routing policy fail health checks?`,
    answer: `Route 53 can be configured to return no response (fail closed) or route to a backup region if defined.`
  },
   {
    question: `281. What is a Load Balancer in AWS?`,
    answer: `A Load Balancer distributes incoming traffic across multiple targets (like EC2 instances) to ensure high availability and fault tolerance.`
  },
   {
    question: `282. What is Elastic Load Balancing (ELB)?`,
    answer: `Elastic Load Balancing (ELB) automatically distributes traffic across multiple targets, scaling with your application’s demand.`
  },
  {
    question: `283. What are the different types of Load Balancers in AWS?`,
    answer: `Application Load Balancer (ALB)
              Network Load Balancer (NLB)
              Gateway Load Balancer (GLB)
              Classic Load Balancer (deprecated).`
  },
   {
    question: `284. What is an Application Load Balancer (ALB)?`,
    answer: `ALB operates at Layer 7 (HTTP/HTTPS) of the OSI model and routes requests based on content, such as URL path or hostname.`
  },
   {
    question: `285. What is a Network Load Balancer (NLB)?`,
    answer: `NLB operates at Layer 4 (TCP/UDP) and handles millions of requests per second with ultra-low latency.`
  },
   {
    question: `286. What is a Gateway Load Balancer (GLB)?`,
    answer: `GLB is used to deploy and manage third-party virtual appliances (like firewalls or intrusion detection systems) at scale.`
  },
   {
    question: `287. What is a Classic Load Balancer (CLB)?`,
    answer: `CLB is the legacy load balancer that operates at both Layer 4 and Layer 7, mainly for older EC2-Classic networks.`
  },
   {
    question: `288. What is the main difference between ALB and NLB?`,
    answer: `ALB: Works at Layer 7 (HTTP/HTTPS), supports advanced routing.
              NLB: Works at Layer 4 (TCP/UDP), designed for high-performance, low-latency workloads.`
  },
  {
    question: `289. What is a Target Group in AWS ELB?`,
    answer: `A Target Group is a collection of EC2 instances or services that receive traffic from a load balancer.`
  },
   {
    question: `290. What is a Listener in AWS Load Balancer?`,
    answer: `A Listener checks for incoming requests on a specific port and protocol and forwards them to target groups.`
  },
   {
    question: `291. What are Health Checks in ELB?`,
    answer: ` Health checks are periodic tests used by the load balancer to determine if targets (instances) are healthy and available to receive traffic.`
  },
   {
    question: `292. What happens if a target fails a health check?`,
    answer: `If a target fails health checks repeatedly, the load balancer stops sending traffic to that instance until it becomes healthy again.`
  },
   {
    question: `293. What protocols does ALB support?`,
    answer: `ALB supports HTTP and HTTPS protocols.`
  },
   {
    question: `294. What protocols does NLB support?`,
    answer: `NLB supports TCP, UDP, and TLS protocols.`
  },
  {
    question: `295. Can a Load Balancer handle SSL/TLS termination?`,
    answer: ` Yes, ALB and NLB can handle SSL/TLS termination, offloading encryption and decryption from backend servers.`
  },
   {
    question: `296. What is SSL offloading?`,
    answer: `It’s when the load balancer handles SSL encryption/decryption instead of backend servers, reducing their CPU load.`
  },
  {
    question: `297. Can a single Load Balancer route to multiple target groups?`,
    answer: `Yes, using listener rules, a Load Balancer can route requests to multiple target groups based on conditions like path or host.`
  },
   {
    question: `298. What is Cross-Zone Load Balancing?`,
    answer: `Cross-Zone Load Balancing allows a load balancer to distribute traffic evenly across all instances in all Availability Zones.`
  },
   {
    question: `299. Is ELB highly available by default?`,
    answer: `Yes, ELB automatically distributes traffic across multiple Availability Zones for fault tolerance.`
  },
   {
    question: `300. Can you use ELB with Auto Scaling?`,
    answer: `Yes, ELB integrates seamlessly with Auto Scaling Groups (ASG) to automatically add or remove instances as demand changes.`
  },
 
  
  
  
  {
    question: `301. How does an Application Load Balancer perform routing?`,
    answer: `ALB uses listener rules that route traffic based on:
              Host-based routing (e.g., api.example.com)
              Path-based routing (e.g., /login, /user)
              Header or query string routing.`
  },
   {
    question: `302. How does a Network Load Balancer perform routing?`,
    answer: `NLB routes traffic based on IP protocol data (Layer 4) and supports static IP addresses for predictable connections.`
  },
  {
    question: `303. How do you configure an HTTPS listener in ALB?`,
    answer: `You need to:
                Create an HTTPS listener on port 443.
                Attach an SSL certificate from AWS Certificate Manager (ACM).`
  },
   {
    question: `304. What is Sticky Session (Session Affinity) in ELB?`,
    answer: `Sticky sessions ensure that a user’s requests are consistently routed to the same backend instance during a session.`
  },
   {
    question: `305. How do you enable Sticky Sessions in ALB?`,
    answer: `In ALB, enable stickiness in the target group settings using an application cookie.`
  },
   {
    question: `306. What is the idle timeout in ELB?`,
    answer: `It’s the duration a connection stays open without activity. For ALB, the default timeout is 60 seconds.`
  },
   {
    question: `307. How do you log requests from a Load Balancer?`,
    answer: `Enable Access Logs in ELB — they store detailed request information in an S3 bucket.`
  },
   {
    question: `308. What metrics can you monitor in CloudWatch for ELB?`,
    answer: `Common metrics include:
              RequestCount
              HealthyHostCount
              UnHealthyHostCount
              Latency
              HTTPCode_ELB_5XX_Count.`
  },
  {
    question: `309. How does ALB integrate with ECS (Elastic Container Service)?`,
    answer: ` ALB routes traffic to containers in ECS using dynamic port mapping — it identifies which port each container listens on.`
  },
   {
    question: `310. How does NLB support static IPs?`,
    answer: `Each subnet of an NLB gets a static IP address, or you can assign your own Elastic IPs (EIPs) for consistent addressing.`
  },
   {
    question: `311. What is the advantage of NLB over ALB for high-performance apps?`,
    answer: `NLB can handle millions of requests per second with ultra-low latency, suitable for gaming, IoT, and real-time apps.`
  },
   {
    question: `312. Can ALB route traffic to Lambda functions?`,
    answer: `Yes ✅ — ALB supports Lambda as a target, allowing it to trigger serverless backends directly.`
  },
   {
    question: `313. What is the purpose of the Target Group Health Check settings?`,
    answer: `They determine how many failed checks mark an instance as unhealthy and how often to perform health checks.`
  },
   {
    question: `314. How does ELB handle SSL certificates?`,
    answer: `You can use AWS Certificate Manager (ACM) to manage and attach SSL/TLS certificates to your load balancer.`
  },
  {
    question: `315. What is the benefit of using multiple listeners on a Load Balancer?`,
    answer: `It allows the same Load Balancer to handle different protocols or ports, e.g., HTTP:80 and HTTPS:443.`
  },
   {
    question: `316. What is the difference between public and internal load balancers?`,
    answer: `Public (Internet-facing): Routes traffic from the internet.
              Internal: Routes traffic only within a VPC.`
  },

  {
    question: `317. How does Cross-Zone Load Balancing affect cost?`,
    answer: `For ALB  its free For NLB cross-AZ data transfer charges apply.`
  },
   
  
  {
    question: `318. What is Deregistration Delay in Target Groups?`,
    answer: `The Deregistration Delay controls how long ELB waits before stopping traffic to an instance marked for removal — default is 300 seconds.`
  },
  {
    question: `319. How can you ensure zero downtime during deployment using ELB?`,
    answer: `Use:
                Blue/Green deployment
                Weighted target groups
                Auto Scaling integration to shift traffic gradually without downtime.
`
  },
  {
    question: `320. How can you troubleshoot failed health checks?`,
    answer: `Check:
                The target’s security group rules
                Health check path and port
                Application response codes (200 OK expected)
                Instance logs or CloudWatch metrics`
  },

  {
    question: ` Devops Interview Question and Answers`,
    answer: ` Devops Begins Here GIT QUESTIONS/ANSWERS`
  },
   {
    question: `1. What is Git? `,
    answer: `Git is a distributed version control system that tracks changes in source code and allows multiple people to collaborate on projects efficiently. `
  },
   {
    question: `2. What is the difference between Git and GitHub? `,
    answer: `Git: A version control tool.
            GitHub: A cloud-based hosting service for Git repositories. `
  },
   {
    question: `3. What is a repository in Git? `,
    answer: `A repository (repo) is a directory that contains all project files and the history of changes (commits). `
  },
   {
    question: `4. What is a commit in Git? `,
    answer: `A commit is a snapshot of your project’s changes at a particular point in time. `
  },
   {
    question: `5. What command is used to create a new Git repository? `,
    answer: `git init `
  },
  {
    question: `6. How do you clone an existing repository? `,
    answer: `git clone <repository_URL> `
  },
   {
    question: `7. What command shows the current status of files in your repository? `,
    answer: `git status `
  },
   {
    question: `8. How do you stage a file for commit? `,
    answer: `git add <filename> `
  },
   {
    question: `9. How do you commit the staged changes? `,
    answer: `git commit -m "commit message" `
  },
   {
    question: `10. How do you view the commit history? `,
    answer: `git log `
  },
   {
    question: `11. What is the purpose of .gitignore file? `,
    answer: `It lists files and directories that Git should ignore (not track), such as temporary or build files. `
  },
  {
    question: `12. How do you check the current branch in Git? `,
    answer: `git branch `
  },
   {
    question: `13. What is a branch in Git? `,
    answer: `A branch is a pointer to a specific commit — it allows you to work on new features independently. `
  },
   {
    question: ` 14. How do you create a new branch?`,
    answer: `git branch <branch_name> `
  },
   {
    question: `15. How do you switch to another branch? `,
    answer: `git checkout <branch_name> `
  },
 
   {
    question: `16. How do you merge one branch into another? `,
    answer: `git merge <branch_name> `
  },
   {
    question: `17. What is the difference between git pull and git fetch? `,
    answer: `git fetch downloads commits but doesn’t merge them.
              git pull downloads and merges automatically. `
  },
  {
    question: `18. How do you delete a branch? `,
    answer: `git branch -d <branch_name> `
  },
  
   {
    question: `19. What is the command to view file differences before committing? `,
    answer: `git diff `
  },
{
    question: `20. What is the staging area in Git? `,
    answer: `It’s a place where changes are stored temporarily before being committed to the repository. `
  },
  
   {
    question: `21. What is a remote repository in Git? `,
    answer: `A remote repository is a version of your project hosted on a server (like GitHub, GitLab, or Bitbucket). `
  },
 {
    question: `22. How do you add a remote repository? `,
    answer: `git remote add origin <repository_URL> `
  },
{
    question: `23. What does git push do? `,
    answer: `It uploads your local commits to a remote repository. `
  },
  
   {
    question: `24. What does git pull do? `,
    answer: `It fetches and merges changes from the remote repository into your current branch. `
  },
   {
    question: `25. What is a merge conflict? `,
    answer: `A merge conflict occurs when changes in two branches affect the same lines of code differently. `
  },
{
    question: `26. How do you resolve a merge conflict? `,
    answer: `Manually edit the conflicting files, remove conflict markers, and then commit the resolved changes. `
  },
  
   {
    question: `27. What is the difference between git merge and git rebase? `,
    answer: `Merge: Combines changes and preserves history.
              Rebase: Moves or re-applies commits on top of another base branch (creates a cleaner history). `
  },
   {
    question: `28. How do you temporarily save changes without committing them? `,
    answer: `git stash `
  },
{
    question: `29. How do you apply stashed changes? `,
    answer: `git stash apply `
  },
  
   {
    question: `30. What is git revert used for? `,
    answer: `It creates a new commit that undoes the changes made by a previous commit. `
  },
   {
    question: `31. What is git reset used for? `,
    answer: `It moves the current branch pointer to a previous commit, discarding or keeping changes depending on the mode. `
  },
{
    question: `32. Difference between git reset --hard and git reset --soft? `,
    answer: `--hard: Discards all local changes.
              --soft: Keeps changes in the staging area. `
  },
  
   {
    question: `33. What is the purpose of git tag? `,
    answer: `Tags are used to mark specific commits, typically for version releases. `
  },
   {
    question: `34. How do you see the list of all tags? `,
    answer: `git tag `
  },
{
    question: `35. How do you delete a file from the repository? `,
    answer: `git rm <filename>
              git commit -m "Removed file" `
  },
  
   {
    question: `36. What is a detached HEAD state in Git? `,
    answer: `It occurs when you checkout a specific commit instead of a branch, meaning new commits won’t belong to any branch. `
  },
   {
    question: `37. How can you see changes introduced by a specific commit? `,
    answer: `git show <commit_id> `
  },
{
    question: `38. How do you rename a branch? `,
    answer: `git branch -m <new_branch_name> `
  },
  
   {
    question: `39. How can you undo the last commit but keep changes? `,
    answer: `git reset --soft HEAD~1 `
  },

 {
    question: `40. What is Continuous Integration (CI) in relation to Git? `,
    answer: `It’s a DevOps practice where code pushed to Git is automatically built and tested using tools like Jenkins or GitHub Actions. `
  },
 {
    question: `Github Interview question  `,
    answer: ` Github Answers`
  },

 {
    question: `41. What is GitHub? `,
    answer: `GitHub is a cloud-based platform for hosting Git repositories, allowing multiple developers to collaborate, manage versions, and review code. `
  },
  {
    question: `42. How is GitHub different from Git? `,
    answer: `Git is a version control system.
              GitHub is a cloud service that hosts Git repositories and provides collaboration features.
 `
  },

 {
    question: `43. What is a repository in GitHub? `,
    answer: `A repository (repo) is a storage space on GitHub that holds your project files, code, and commit history. `
  },
 {
    question: `44. What is the difference between a public and private repository? `,
    answer: `Public: Visible to everyone.
              Private: Only accessible to authorized users or team members.
 `
  },

 {
    question: `45. How do you create a new repository on GitHub? `,
    answer: `Go to GitHub → Repositories → New → Enter name → Choose visibility → Create repository. `
  },
    {
    question: `46. What is a commit on GitHub? `,
    answer: `A commit is a saved change or version of the project, with a unique ID and message describing what was changed. `
  },

 {
    question: `47. What is a branch in GitHub? `,
    answer: `A branch is a separate line of development that allows multiple developers to work on different features simultaneously. `
  },
 {
    question: `48. What is the default branch in GitHub? `,
    answer: `The default branch is usually named main (previously master). `
  },

 {
    question: `49. What is a pull request (PR)? `,
    answer: `A pull request is a request to merge changes from one branch into another, often used for code review before merging. `
  },
   {
    question: `50. What is a fork in GitHub? `,
    answer: `A fork is a copy of someone else’s repository under your account, allowing you to modify it independently. `
  },

 {
    question: `51. What is the difference between a clone and a fork? `,
    answer: `Clone: Copies a repo from GitHub to your local system.
              Fork: Creates a copy in your GitHub account (for contributing to others’ projects). `
  },
 {
    question: `52. How do you clone a repository from GitHub? `,
    answer: `git clone <repository_URL> `
  },

 {
    question: `53. What is GitHub Actions? `,
    answer: `GitHub Actions is a CI/CD automation tool that allows you to build, test, and deploy directly from your GitHub repository. `
  },
    {
    question: `54. What is a README file? `,
    answer: `A README.md file describes your project, its purpose, and how to use or install it. `
  },

 {
    question: `55. What is a GitHub Issue? `,
    answer: `Issues are used to track bugs, enhancements, or tasks related to a repository. `
  },
 {
    question: `56. What are GitHub Projects? `,
    answer: `Projects are Kanban-style boards used for project management and task tracking within a repository. `
  },

 {
    question: `57. How do you contribute to another user’s project on GitHub? `,
    answer: `By forking their repository, making changes, and creating a pull request to propose your updates. `
  },
    {
    question: `58. What is a GitHub Gist? `,
    answer: `A Gist is a simple way to share small code snippets or notes publicly or privately. `
  },

 {
    question: `59. How can you delete a repository in GitHub? `,
    answer: `Go to Settings → Danger Zone → Delete this repository → Confirm. `
  },
 {
    question: `60. What is the purpose of GitHub Discussions? `,
    answer: `GitHub Discussions provide a forum for users to ask questions, share ideas, and collaborate outside of code changes. `
  },

 {
    question: `61. What is Continuous Integration (CI) in GitHub? `,
    answer: `CI is a practice of automatically building and testing code whenever changes are pushed, ensuring integration issues are caught early. `
  },
    {
    question: `62. How does GitHub Actions support CI/CD pipelines? `,
    answer: `GitHub Actions allows you to create workflows using YAML files to automate builds, tests, and deployments. `
  },

 {
    question: `63. Where do you define GitHub Action workflows? `,
    answer: `In the .github/workflows/ directory inside your repository. `
  },
 {
    question: `64. What is a workflow trigger in GitHub Actions? `,
    answer: `It defines when a workflow should run, such as push, pull_request, or schedule.
              Example:
              on: push `
  },

 {
    question: `65. What is a self-hosted runner in GitHub Actions? `,
    answer: `A self-hosted runner is a custom machine that executes GitHub Actions workflows instead of GitHub’s default cloud runners. `
  },
    {
    question: `66. How do you protect the main branch in GitHub? `,
    answer: `By enabling branch protection rules under repository settings — such as requiring PR reviews before merging. `
  },

 {
    question: `67. What is a merge conflict in GitHub? `,
    answer: `It occurs when two commits change the same part of a file differently, requiring manual resolution. `
  },
 {
    question: `68. How do you resolve a merge conflict in GitHub? `,
    answer: `You can resolve it manually in a local branch or directly using GitHub’s web editor, then commit the resolution. `
  },

 {
    question: `69. What are GitHub Webhooks? `,
    answer: `Webhooks allow GitHub to send real-time notifications to other systems (e.g., Jenkins, Slack) when certain events occur (like a push or PR). `
  },
    {
    question: `70. What are GitHub Environments? `,
    answer: `They define deployment environments (like dev, staging, production) for GitHub Actions workflows with specific rules or secrets. `
  },

 {
    question: `71. What are GitHub Secrets? `,
    answer: `Encrypted variables (like API keys or passwords) stored securely and used in workflows. `
  },
 {
    question: `72. How can you automate code deployment from GitHub to AWS or other platforms? `,
    answer: `By using GitHub Actions or integrating GitHub with Jenkins, AWS CodePipeline, or Docker Hub. `
  },

 {
    question: `73. What is a GitHub Release? `,
    answer: `Releases are versions of your project that include tagged commits and downloadable source code or binaries. `
  },
    {
    question: `74. What is the purpose of a tag in GitHub? `,
    answer: `Tags mark specific points in history (like v1.0) — often used for release versions. `
  },

 {
    question: `75. How do you collaborate using pull requests? `,
    answer: `Developers create a PR, team members review the code, suggest changes, and merge it into the main branch after approval. `
  },
 {
    question: `76. What is a code review in GitHub? `,
    answer: `It’s a process where team members review a pull request’s code before it’s merged, improving code quality and consistency. `
  },

 {
    question: `77. How can you enforce review policies in GitHub? `,
    answer: `By enabling branch protection rules — requiring approvals, passing checks, or no direct pushes to main. `
  },
    {
    question: `78. What is a GitHub organization? `,
    answer: `An organization is a shared account for teams to manage multiple repositories and members under one workspace. `
  },

 {
    question: `79. How can you manage permissions in GitHub? `,
    answer: `By assigning roles (e.g., admin, maintainer, contributor, reader) within organizations or repositories. `
  },
 {
    question: `80. What is GitHub Pages? `,
    answer: `It’s a feature to host static websites directly from a GitHub repository — often used for documentation or portfolio pages.
 `
  },

 {
    question: `Ansible Interview questions `,
    answer: `Ansible Answers `
  }, 
 {
    question: `1. What is Ansible? `,
    answer: `Ansible is an open-source IT automation tool used for configuration management, application deployment, orchestration, and provisioning in DevOps. `
  }, 
 {
    question: `2. What are the main features of Ansible? `,
    answer: `Agentless (no software required on target machines)
              Uses YAML for configurations
              Idempotent (no repeated changes)
              Easy to learn and maintain `
  }, 
 {
    question: `3. Who developed Ansible? `,
    answer: `Ansible was developed by Michael DeHaan and later acquired by Red Hat. `
  }, 
 {
    question: `4. What language is Ansible written in? `,
    answer: `Ansible is written in Python. `
  }, 
{
    question: `5. What protocol does Ansible use to communicate with managed nodes? `,
    answer: `Ansible uses SSH for Linux systems and WinRM for Windows systems. `
  }, 
 {
    question: `6. What is an Inventory file in Ansible? `,
    answer: `An inventory file is a list of target hosts or groups on which Ansible runs tasks.
              Default location: /etc/ansible/hosts `
  }, 
 {
    question: `7. What is an Ansible Playbook? `,
    answer: `A playbook is a YAML file that defines one or more plays. Plays describe a set of tasks to be executed on hosts. `
  }, 
 {
    question: `8. What is a Module in Ansible? `,
    answer: `Modules are small programs that perform specific tasks like installing software, copying files, or managing services.
              Examples: yum, copy, service, user. `
  }, 
 {
    question: `9. What is a Task in Ansible? `,
    answer: `A task is a single unit of action (e.g., install a package) that runs on the target system. `
  }, 
  {
    question: `10. What is an Ad-Hoc Command in Ansible? `,
    answer: `An Ad-Hoc command is a one-liner command used for quick operations without writing a playbook.
              Example:
                ansible all -m ping
 `
  }, 
 {
    question: `11. What is a Role in Ansible? `,
    answer: `A role is a structured way to organize playbooks into reusable components (tasks, handlers, templates, variables, etc.). `
  }, 
 {
    question: `12. What is a Handler in Ansible? `,
    answer: `Handlers are special tasks that run only when notified by another task (usually used to restart services after configuration changes). `
  }, 
 {
    question: `13. What is Idempotency in Ansible? `,
    answer: `Idempotency ensures that running a playbook multiple times produces the same result — no redundant changes. `
  }, 
 {
    question: `14. What is a Fact in Ansible? `,
    answer: `Facts are system details (like IP, OS, memory) automatically collected from managed nodes at runtime. `
  }, 
  {
    question: `15. How do you execute a playbook? `,
    answer: `By using:

              ansible-playbook playbook.yml `
  }, 
 {
    question: `16. What is YAML and why is it used in Ansible? `,
    answer: `YAML (Yet Another Markup Language) is a human-readable data format used to define playbooks because it’s easy to write and understand. `
  }, 
 {
    question: `17. What is Ansible Galaxy? `,
    answer: `Ansible Galaxy is an online community for sharing and downloading Ansible roles and collections. `
  }, 
 {
    question: `18. What is the default file extension of a playbook? `,
    answer: `The default extension is .yml or .yaml. `
  }, 
 {
    question: `19. Does Ansible require an agent to be installed on target systems? `,
    answer: `No, Ansible is agentless — it only needs SSH or WinRM access. `
  }, 
  {
    question: `20. What is the command to check Ansible version? `,
    answer: `ansible --version `
  }, 
 {
    question: ` Intermediate Questions
    1. Explain the architecture of Ansible. `,
    answer: `Ansible has 3 main components:
              Control Node – Machine where Ansible is installed.
              Managed Nodes – Systems being automated.
              Inventory – List of managed nodes. `
  }, 
 {
    question: `2. What are Variables in Ansible? `,
    answer: `Variables are used to store dynamic values that can be reused across playbooks.
              Example:

                vars:
                  http_port: 80 `
  }, 
 {
    question: `3. What are Templates in Ansible? `,
    answer: `Templates (usually .j2 files using Jinja2) allow dynamic file generation based on variables.
              Example: generating nginx.conf with a variable port. `
  }, 
 {
    question: `4. What is Ansible Tower (AWX)? `,
    answer: `Ansible Tower (or its open-source version AWX) provides a web UI, REST API, role-based access control, and scheduling for managing Ansible automation. `
  }, 
  {
    question: `5. What is a Dynamic Inventory? `,
    answer: `A Dynamic Inventory automatically retrieves the list of hosts from external sources like AWS, Azure, or GCP instead of a static hosts file. `
  }, 
 {
    question: `6. What is Ansible Vault used for? `,
    answer: `Ansible Vault is used to encrypt sensitive data (like passwords or API keys) in playbooks or variable files. `
  }, 
 {
    question: `7. How do you encrypt a file using Ansible Vault? `,
    answer: `ansible-vault encrypt secrets.yml `
  }, 
 {
    question: `8. How do you decrypt a Vault file? `,
    answer: `ansible-vault decrypt secrets.yml `
  }, 
 {
    question: `9. What is the use of the register keyword in Ansible? `,
    answer: `It stores the output of a command or task in a variable.
              Example:

                - command: uptime
                  register: result `
  }, 
  {
    question: `10. What are Loops in Ansible? `,
    answer: `Loops allow repeating a task for multiple items.
Example:

- name: Install packages
  yum:
    name: "{{ item }}"
    state: present
  loop:
    - git
    - nginx
    - docker `
  }, 
 {
    question: `11. What are Conditionals in Ansible? `,
    answer: `Conditionals allow tasks to run only if certain conditions are true using when.
Example:

when: ansible_facts['os_family'] == "Debian"
 `
  }, 
 {
    question: `12. What is the purpose of “become” in Ansible? `,
    answer: `become: yes allows privilege escalation (similar to sudo) to perform administrative tasks. `
  }, 
 {
    question: `13. How do you test a playbook without applying changes? `,
    answer: `Use check mode:

              ansible-playbook playbook.yml --check `
  }, 
 {
    question: `14. How do you limit playbook execution to specific hosts or groups? `,
    answer: `Use the --limit option:

              ansible-playbook playbook.yml --limit webservers `
  }, 
  {
    question: `15. How can you skip specific tags in Ansible? `,
    answer: `ansible-playbook playbook.yml --skip-tags "install" `
  }, 
 {
    question: `16. What is a Callback Plugin in Ansible? `,
    answer: `Callback plugins control output formatting and can send logs or notifications to external systems (like Slack). `
  }, 
 {
    question: `17. How can you disable fact gathering in Ansible? `,
    answer: `Add this in your playbook:

                gather_facts: no `
  }, 
 {
    question: `18. What are Roles used for in Ansible? `,
    answer: `Roles allow playbooks to be modular and reusable by organizing tasks, variables, and templates into structured directories. `
  }, 
 {
    question: `19. What is the difference between a Static and Dynamic Inventory? `,
    answer: `Static: Defined manually in /etc/ansible/hosts.
              Dynamic: Generated automatically from cloud providers or APIs. `
  }, 
  {
    question: `20. How do you handle errors in Ansible playbooks? `,
    answer: `Using keywords like ignore_errors: yes or error handling blocks (block, rescue, always).

Example:

- block:
    - name: Try task
      command: /bin/false
  rescue:
    - debug:
        msg: "Error handled!" `
  }, 
 {
    question: `Maven Interview Questiion `,
    answer: `Answers `
  }, 
  
 {
    question: `1. What is Maven? `,
    answer: `Maven is a build automation and project management tool used primarily for Java projects. It manages dependencies, builds, and project lifecycles. `
  }, 
 {
    question: `2. Who developed Maven?`,
    answer: ` Maven was developed by the Apache Software Foundation.`
  }, 
 {
    question: `3. What is the main objective of Maven? `,
    answer: `To simplify project build processes, dependency management, and project configuration using a standard structure. `
  }, 
  {
    question: `4. What language is Maven written in? `,
    answer: ` Maven is written in Java.`
  }, 
 {
    question: ` 5. What is a POM file in Maven?`,
    answer: `pom.xml (Project Object Model) is the core configuration file that defines a project’s build configuration, dependencies, plugins, and other settings. `
  }, 
 {
    question: ` 6. What is the default file name of Maven’s configuration file?`,
    answer: `pom.xml `
  }, 
 {
    question: ` 7. What does POM stand for?`,
    answer: ` POM stands for Project Object Model.`
  }, 
 {
    question: `8. What is a Maven Repository? `,
    answer: `A Maven Repository is a location where project artifacts (JARs, dependencies, plugins) are stored and retrieved during the build process.`
  }, 
  {
    question: ` 9. What are the types of Maven repositories?`,
    answer: `Local Repository
              Central Repository
              Remote Repository `
  }, 
  {
    question: `10. What is a Maven Dependency? `,
    answer: `A dependency is an external JAR file or library that your project needs to compile or run. `
  }, 
  {
    question: `11. How do you specify dependencies in Maven? `,
    answer: `Dependencies are defined in the pom.xml under the <dependencies> tag.
    Example:

<dependency>
  <groupId>org.springframework</groupId>
  <artifactId>spring-core</artifactId>
  <version>5.3.10</version>
</dependency>
 `
  }, 
  {
    question: `12. What is the default location of the local Maven repository? `,
    answer: `~/.m2/repository (in the user’s home directory). `
  }, 
  {
    question: ` 13. What is the command to build a Maven project?`,
    answer: `mvn clean install `
  }, 
  {
    question: `14. What is the purpose of the mvn clean command? `,
    answer: `It deletes the target directory (which contains previous build outputs) to ensure a fresh build. `
  }, 
  {
    question: `15. What is the purpose of the mvn compile command? `,
    answer: ` It compiles the source code of the project.`
  }, 
  {
    question: ` 16. What is the purpose of the mvn test command?`,
    answer: `It runs all test cases defined in the project using testing frameworks like JUnit or TestNG. `
  }, 
  {
    question: `17. What is the purpose of the mvn package command? `,
    answer: ` It packages the compiled code into a JAR or WAR file as specified in the POM.`
  }, 
  {
    question: ` 18. What is the purpose of the mvn install command?`,
    answer: `It installs the packaged JAR/WAR file into the local repository for use in other local projects. `
  }, 
  {
    question: `19. What is the purpose of the mvn deploy command? `,
    answer: ` It copies the final packaged artifact to a remote repository for sharing with other developers.`
  }, 
  {
    question: ` 20. What is the lifecycle in Maven?`,
    answer: ` A lifecycle defines a sequence of phases in the build process.
              The main lifecycles are:
              default (build & deploy)
              clean (clean artifacts)
              site (generate documentation)`
  }, 
  {
    question: ` INTERMEDIATE MAVEN INTERVIEW QUESTIONS`,
    answer: ` ANSWERS`
  }, 
  {
    question: ` 1. What are the phases in the default Maven lifecycle?`,
    answer: `validate
              compile
              test
              package
              verify
              install
              deploy `
  }, 
  {
    question: `2. What is a Maven plugin? `,
    answer: `Plugins are used to extend Maven’s functionality and perform tasks like compiling, testing, packaging, or deploying projects. `
  }, 
  {
    question: `3. What is the purpose of the maven-compiler-plugin? `,
    answer: `It compiles the project’s source code.
Example:

<plugin>
  <groupId>org.apache.maven.plugins</groupId>
  <artifactId>maven-compiler-plugin</artifactId>
  <version>3.8.1</version>
  <configuration>
    <source>1.8</source>
    <target>1.8</target>
  </configuration>
</plugin> `
  }, 
  {
    question: `4. What are Maven Coordinates? `,
    answer: `Each artifact in Maven is uniquely identified by:
              groupId
              artifactId
              version
              packaging `
  }, 
  {
    question: ` 5. What is the difference between install and deploy in Maven?`,
    answer: `install: Copies artifact to the local repository.
              deploy: Copies artifact to a remote repository for team use. `
  }, 
  {
    question: `6. What is the purpose of the settings.xml file? `,
    answer: `settings.xml configures user-specific settings like repository locations, credentials, or proxy details.
              Default location:
              ~/.m2/settings.xml  `
  }, 
  {
    question: ` 7. How can you skip tests while building in Maven?`,
    answer: `Use the -DskipTests flag:
              mvn package -DskipTests `
  }, 
  {
    question: ` 8. What is the difference between clean install and clean package?`,
    answer: ` clean package: Builds and packages the project.
              clean install: Packages the project and installs it in the local repository.`
  }, 
  {
    question: ` 9. What is the Super POM?`,
    answer: ` The Super POM is Maven’s default POM that all projects inherit from. It defines default settings like repositories and plugin versions.`
  }, 
  {
    question: `10. What is an Archetype in Maven? `,
    answer: `An archetype is a project template that helps create new Maven projects with predefined structure and settings.

Command:

mvn archetype:generate `
  }, 
  {
    question: `11. What is the purpose of mvn dependency:tree? `,
    answer: `It displays all project dependencies in a hierarchical tree structure, helping identify conflicts or duplicates.`
  }, 
  {
    question: `12. How does Maven handle transitive dependencies? `,
    answer: `If dependency A requires dependency B, Maven automatically downloads B as a transitive dependency.`
  }, 
  {
    question: `13. What is the scope element in a Maven dependency? `,
    answer: `It defines where a dependency is available.
Types:

compile

provided

runtime

test

system

import `
  }, 
  {
    question: ` 14. What is the difference between compile and provided scope?`,
    answer: `compile: Required at compile and runtime.

              provided: Available at compile time but not included in the final package (e.g., servlet APIs in web servers). `
  }, 
  {
    question: ` 15. How can you update all dependencies in Maven?`,
    answer: `Use:

              mvn versions:use-latest-versions `
  }, 
  {
    question: `16. What is the difference between SNAPSHOT and RELEASE versions in Maven? `,
    answer: ` SNAPSHOT: Ongoing development version (not final).
              RELEASE: Stable, production-ready version`
  }, 
  {
    question: ` 17. What is a parent POM in Maven?`,
    answer: `A parent POM allows sharing configurations (like dependencies or plugins) among multiple child projects. `
  }, 
  {
    question: `18. What is a multi-module project in Maven? `,
    answer: `A project with a parent POM and multiple submodules (child projects) managed together. `
  }, 
  {
    question: ` 19. What is the purpose of mvn site command?`,
    answer: `It generates project documentation (like reports, dependency graphs) in the target/site directory. `
  }, 
  {
    question: ` 20. How can you analyze project dependency conflicts in Maven?`,
    answer: `Use:

mvn dependency:analyze


It reports unused or missing dependencies and helps clean up the pom.xml.`
  }, 
  {
    question: ` JENKINS INTERVIEW QUESTIONS`,
    answer: ` ANSWER`
  }, 
  {
    question: ` 1. What is Jenkins?`,
    answer: ` Jenkins is an open-source automation server used to automate building, testing, and deploying applications as part of a CI/CD pipeline.`
  }, 
  {
    question: ` 2. Who developed Jenkins?`,
    answer: ` Jenkins was originally developed by Kohsuke Kawaguchi as Hudson and later renamed to Jenkins.`
  }, 
  {
    question: `3. What language is Jenkins written in? `,
    answer: ` Jenkins is written in Java.`
  }, 
  {
    question: `4. What is the purpose of Jenkins in DevOps? `,
    answer: `Jenkins automates the software development lifecycle (SDLC) — including build, test, and deployment — to enable Continuous Integration (CI) and Continuous Deployment (CD). `
  }, 
  {
    question: `5. What is Continuous Integration (CI)? `,
    answer: `CI is the practice of merging all developers’ code into a shared repository frequently and automatically building and testing it. `
  }, 
  {
    question: `6. What is Continuous Deployment (CD)? `,
    answer: `CD is the process of automatically deploying every change that passes automated tests to production. `
  }, 
  {
    question: `7. What are Jenkins Pipelines? `,
    answer: `A pipeline is a series of steps defined in a Jenkinsfile that automates the process of building, testing, and deploying code. `
  }, 
  {
    question: `8. What is a Jenkinsfile? `,
    answer: ` A Jenkinsfile is a text file that defines a Jenkins pipeline, written using Groovy syntax.`
  }, 
  {
    question: `9. What are the two types of Jenkins pipelines? `,
    answer: `Declarative Pipeline
              Scripted Pipeline `
  }, 
  {
    question: `10. What is the default port number of Jenkins? `,
    answer: ` By default, Jenkins runs on port 8080.`
  }, 
  {
    question: ` 11. What is a Jenkins job?`,
    answer: `A job is a task or project Jenkins runs — such as building code, running tests, or deploying applications.
 `
  }, 
  {
    question: ` 12. How can Jenkins be installed?`,
    answer: ` As a WAR file (java -jar jenkins.war)

Using package managers (apt, yum)

Docker container

Cloud-based services like AWS, Azure, or Kubernetes.`
  }, 
  {
    question: `13. What are Jenkins plugins? `,
    answer: `Plugins extend Jenkins’s functionality (e.g., Git, Maven, Docker, Slack). Jenkins has over 1,800 plugins available. `
  }, 
  {
    question: ` 14. What is the Jenkins dashboard?`,
    answer: `The dashboard is the main user interface where you can view jobs, builds, and manage Jenkins configurations. `
  }, 
  {
    question: `15. What is a build trigger in Jenkins? `,
    answer: ` A build trigger defines how and when Jenkins should start a job. Examples:

On code commit (GitHub webhook)

On schedule (CRON)

Manually`
  }, 
  {
    question: `16. How can you trigger a Jenkins job automatically? `,
    answer: `By using webhooks, SCM polling, or scheduled CRON jobs. `
  }, 
  {
    question: ` 17. What is a freestyle project in Jenkins?`,
    answer: `A freestyle project is the simplest type of Jenkins job used to build, test, or deploy software manually or automatically. `
  }, 
  {
    question: `18. What is the use of the “Post-build actions” in Jenkins? `,
    answer: `Post-build actions define what Jenkins should do after a build completes, like sending emails, archiving artifacts, or deploying. `
  }, 
  {
    question: `19. How can you check the build history in Jenkins? `,
    answer: `From the Build History section on the Jenkins dashboard for each job. `
  }, 
  {
    question: ` 20. What is the difference between Jenkins and other CI tools (like GitLab CI or CircleCI)?`,
    answer: `Jenkins is open-source, plugin-rich, and self-hosted, while others may be cloud-native and more limited in customization. `
  }, 
  {
    question: ` INTERMEDIATE QUESTIONS 1. What are Jenkins nodes and masters?`,
    answer: ` Master (Controller): Manages the Jenkins environment and schedules jobs.

Node (Agent/Slave): Executes jobs assigned by the master.`
  }, 
  {
    question: ` 2. What is a Jenkins agent?`,
    answer: `An agent is a remote machine connected to the Jenkins master that executes build jobs. `
  }, 
  {
    question: ` 3. How can Jenkins be integrated with version control systems (VCS)?`,
    answer: `Using plugins like:

Git Plugin (for Git/GitHub)

SVN Plugin

Bitbucket Plugin `
  }, 
  {
    question: ` 4. What is SCM polling in Jenkins?`,
    answer: ` SCM (Source Code Management) polling checks the repository for changes at regular intervals and triggers builds if new commits are found.`
  }, 
  {
    question: `5. What is the difference between polling and webhooks? `,
    answer: `Polling: Jenkins checks for changes periodically.

Webhook: The VCS notifies Jenkins immediately when a change occurs (faster and more efficient). `
  }, 
  {
    question: `6. What is a parameterized build in Jenkins? `,
    answer: `A build that accepts user-defined input parameters (e.g., branch name, environment) before starting. `
  }, 
  {
    question: ` 7. How can you secure Jenkins?`,
    answer: `Enable authentication and authorization.

Use role-based access control (RBAC).

Integrate with LDAP or Active Directory.

Always use HTTPS. `
  }, 
  {
    question: `8. What is Blue Ocean in Jenkins? `,
    answer: `Blue Ocean is a modern Jenkins UI that provides a visual pipeline editor and improved visualization for builds. `
  }, 
  {
    question: ` 9. What are artifacts in Jenkins?`,
    answer: `Artifacts are output files generated by a build (like .jar, .war, .zip) that Jenkins can store and share. `
  }, 
  {
    question: ` 10. How can you archive artifacts in Jenkins?`,
    answer: `Use the “Archive the artifacts” post-build action or define it in a Jenkinsfile:
    archiveArtifacts 'target/*.jar' `
  }, 
  {
    question: ` 11. What is the purpose of the “Pipeline as Code” concept?`,
    answer: `It allows storing pipeline definitions (Jenkinsfiles) inside version control repositories — improving traceability and automation. `
  }, 
  {
    question: `12. What is the syntax for a simple declarative pipeline? `,
    answer: `pipeline {
  agent any
  stages {
    stage('Build') {
      steps {
        echo 'Building...'
      }
    }
    stage('Test') {
      steps {
        echo 'Testing...'
      }
    }
  }
} `
  }, 
  {
    question: `13. How can Jenkins be integrated with Docker? `,
    answer: ` Use the Docker Plugin to build images.

Define Docker agents in pipelines.
Example:

agent {
  docker { image 'maven:3.8.1' }
}`
  }, 
  {
    question: `14. How can Jenkins be integrated with Maven? `,
    answer: ` By using the Maven Plugin to run builds:

mvn clean install


or through Jenkinsfile steps:

sh 'mvn package'`
  }, 
  {
    question: `15. How can Jenkins be integrated with Ansible? `,
    answer: ` You can call Ansible playbooks in a Jenkins pipeline using:

sh 'ansible-playbook deploy.yml'


or through the Ansible Plugin.
`
  }, 
  {
    question: ` 16. How do you back up Jenkins configurations?`,
    answer: `By backing up:

$JENKINS_HOME directory

Jobs, plugins, and user configurations
Or by using plugins like ThinBackup. `
  }, 
  {
    question: ` 17. How can Jenkins notify developers about build results?`,
    answer: `Email notifications

Slack notifications (via Slack Plugin)

Webhook callbacks `
  }, 
  {
    question: `18. How do you schedule a build in Jenkins? `,
    answer: `Using CRON syntax under “Build periodically”:
Example: H/15 * * * * → triggers every 15 minutes. `
  }, 
  {
    question: ` 19. What is a shared library in Jenkins?`,
    answer: ` Shared libraries allow teams to reuse common pipeline code across multiple Jenkinsfiles.`
  }, 
  {
    question: `20. What are common issues you might face in Jenkins pipelines? `,
    answer: `Plugin compatibility errors

Misconfigured agents

SCM credential issues

Build failures due to dependency errors

Timeout or permission issues `
  }, 

  {
    question: `DOCKER INTERVIEW QUESTIONS `,
    answer: ` ANSWERS`
  }, 
  {
    question: ` 1. What is Docker?`,
    answer: `Docker is an open-source platform used to build, ship, and run applications inside containers, ensuring consistent environments across development and production. `
  }, 
  {
    question: `2. What is a Docker Container? `,
    answer: `A container is a lightweight, portable unit that contains everything an application needs to run — including code, runtime, libraries, and dependencies. `
  }, 
  {
    question: `3. What is the difference between a VM (Virtual Machine) and a Docker container? `,
    answer: `Feature	Virtual Machine	Docker Container
OS	Runs full OS	Shares host OS kernel
Size	Heavy (GBs)	Lightweight (MBs)
Boot time	Minutes	Seconds
Isolation	Hardware-level	Process-level `
  }, 
  {
    question: `4. What is Docker Engine? `,
    answer: `Docker Engine is the core component that runs and manages containers on a host system. `
  }, 

  {
    question: `5. What is a Docker Image? `,
    answer: `A Docker Image is a read-only template that contains the instructions to create a container (like a blueprint). `
  }, 
  {
    question: `6. How do you create a Docker image? `,
    answer: `By writing a Dockerfile and running:

docker build -t myimage . `
  }, 
  {
    question: `7. What is a Dockerfile? `,
    answer: `A Dockerfile is a text file containing commands and instructions to build a Docker image. `
  }, 
  {
    question: `8. What is Docker Hub? `,
    answer: ` Docker Hub is a cloud-based registry where you can store and share Docker images publicly or privately.`
  }, 
  {
    question: `9. How do you download an image from Docker Hub? `,
    answer: `Use the command:

docker pull <image-name> `
  }, 
  {
    question: ` 10. How do you run a Docker container?`,
    answer: `Use:

docker run <image-name> `
  }, 
  {
    question: `11. How can you list running containers? `,
    answer: `docker ps `
  }, 
  {
    question: `12. How can you stop a running container? `,
    answer: `docker stop <container_id>`
  }, 
  {
    question: `13. How can you remove a container? `,
    answer: `docker rm <container_id> `
  }, 
  {
    question: ` 14. How can you remove an image?`,
    answer: ` docker rmi <image_id>`
  }, 
  {
    question: `15. What is the purpose of the docker-compose tool? `,
    answer: `docker-compose allows you to define and manage multi-container applications using a YAML file. `
  }, 
  {
    question: ` 16. What is the default network driver in Docker?`,
    answer: `The default driver is bridge. `
  }, 
  {
    question: `17. How can you view Docker images on your system? `,
    answer: `docker images`
  }, 
  {
    question: `18. What is a Docker Volume? `,
    answer: `A volume is used for persistent data storage in containers — data stored in volumes remains even if containers are removed. `
  }, 
  {
    question: ` 19. What is docker exec used for?`,
    answer: `docker exec allows you to run a command inside a running container, e.g.:

docker exec -it <container_id> bash `
  }, 
  {
    question: `20. Can multiple containers share the same image? `,
    answer: `Yes ✅, multiple containers can be created from the same image and run independently. `
  }, 
  {
    question: ` INREMEDIATE 1. What are the main components of Docker architecture? `,
    answer: `Docker Client (CLI commands)

Docker Daemon (runs containers)

Docker Images

Docker Containers

Docker Registry (Hub) `
  }, 
  {
    question: `2. What is the purpose of Docker Daemon (dockerd)? `,
    answer: `dockerd is the background service that manages images, containers, networks, and volumes. `
  }, 
  {
    question: ` 3. What is a multi-stage Docker build?`,
    answer: `It’s a technique to optimize image size by using multiple FROM statements — only the final build stage’s artifacts are included.`
  }, 
  {
    question: `4. How do you expose a port from a container? `,
    answer: `By using:

Dockerfile:

EXPOSE 8080


Or command line:

docker run -p 8080:80 nginx `
  }, 
  {
    question: ` 5. How can you check logs of a container?`,
    answer: `docker logs <container_id> `
  }, 
  {
    question: ` 6. How do you inspect a Docker container?`,
    answer: `docker inspect <container_id>


This provides detailed JSON output of configuration and status. `
  }, 
  {
    question: ` 7. What is the difference between docker run and docker start?`,
    answer: `docker run creates and starts a new container.

docker start starts an existing stopped container. `
  }, 
  {
    question: `8. What is the purpose of .dockerignore file? `,
    answer: ` It excludes files and directories (like .git, node_modules) from being copied into the Docker image during build.`
  }, 
  {
    question: `9. How can you link two containers for communication? `,
    answer: ` Use Docker networks or compose to connect containers within the same network.`
  }, 
  {
    question: `10. What are Docker namespaces and cgroups? `,
    answer: `They are Linux kernel features that Docker uses for:

Namespaces: Isolation (process, network, mount)

cgroups: Resource control (CPU, memory limits) `
  }, 
  {
    question: `11. What is the difference between ENTRYPOINT and CMD in Dockerfile? `,
    answer: `
Directive	Purpose
ENTRYPOINT	Defines the main executable
CMD	Provides default arguments to ENTRYPOINT

Example:

ENTRYPOINT ["python", "app.py"]
CMD ["--debug"] `
  }, 
  {
    question: `12. How can you make a container restart automatically? `,
    answer: `Use the --restart flag:

docker run --restart=always myapp
 `
  }, 
  {
    question: `13. What is the purpose of the docker-compose.yml file? `,
    answer: `It defines services, networks, and volumes for multi-container applications.
Example:

version: "3"
services:
  web:
    image: nginx
    ports:
      - "80:80" `
  }, 
  {
    question: `14. What are Docker Networks used for? `,
    answer: `Docker networks enable communication between containers.
Types include:

bridge

host

overlay

none `
  }, 
  {
    question: ` 15. What is an Overlay Network in Docker?`,
    answer: `An overlay network allows containers on different Docker hosts to communicate — typically used in Docker Swarm. `
  }, 
  {
    question: `16. What is Docker Swarm? `,
    answer: ` Docker Swarm is Docker’s native container orchestration tool for managing a cluster of Docker nodes.`
  }, 
  {
    question: `17. How can you check the resource usage of containers? `,
    answer: `docker stats `
  }, 
  {
    question: ` 18. What is the difference between Docker and Kubernetes?`,
    answer: ` 
Feature	Docker	Kubernetes
Purpose	Containerization	Orchestration
Scope	Runs single containers	Manages multiple containers
Scaling	Manual	Automatic`
  }, 
  {
    question: `19. How can you remove all stopped containers at once? `,
    answer: `docker container prune `
  }, 
  {
    question: ` 20. What are the best practices for writing a Dockerfile?`,
    answer: `Use small base images (e.g., alpine)

Combine RUN commands to reduce layers

Use .dockerignore

Pin image versions

Keep containers stateless `
  }, 
  {
    question: ` KUBERNETES INTERVIEW QUESTIONS`,
    answer: ` ANSWERS`
  }, 
  {
    question: `1. What is Kubernetes? `,
    answer: ` Kubernetes (K8s) is an open-source container orchestration platform developed by Google to automate deployment, scaling, and management of containerized applications.`
  }, 
  {
    question: `2. What problem does Kubernetes solve? `,
    answer: `It automates container management tasks like deployment, scaling, load balancing, and self-healing, which are difficult to manage manually at scale. `
  }, 
  {
    question: ` 3. What is a Node in Kubernetes?`,
    answer: `A Node is a worker machine (physical or virtual) that runs pods and is managed by the master node. `
  }, 
  {
    question: `4. What is a Pod? `,
    answer: `A Pod is the smallest deployable unit in Kubernetes — it contains one or more containers that share storage, network, and specifications. `
  }, 
  {
    question: `5. What is a Cluster in Kubernetes? `,
    answer: `A Cluster is a group of nodes (worker + master) that run containerized applications managed by Kubernetes. `
  }, 
  {
    question: `6. What is a Master Node (Control Plane)? `,
    answer: `The Master Node controls and manages the Kubernetes cluster. It runs key components like:

API Server

Scheduler

Controller Manager

etcd (key-value store) `
  }, 
  {
    question: ` 7. What is etcd in Kubernetes?`,
    answer: `etcd is a distributed key-value store used by Kubernetes to store cluster data, such as configuration and state information. `
  }, 
  {
    question: ` 8. What is kubectl?`,
    answer: `kubectl is the command-line tool used to communicate with the Kubernetes cluster (API Server). `
  }, 

  {
    question: `9. What is a Deployment in Kubernetes? `,
    answer: ` A Deployment is a higher-level abstraction that manages ReplicaSets and ensures that a specified number of pods are always running. `
  }, 
  {
    question: `10. What is a ReplicaSet? `,
    answer: `A ReplicaSet ensures a defined number of pod replicas are running at any given time. `
  }, 
  {
    question: `11. What is a Namespace? `,
    answer: `Namespaces are used to divide cluster resources among multiple users or teams — useful for large environments.  `
  }, 
  {
    question: `12. What is a Service in Kubernetes? `,
    answer: `A Service provides a stable IP and DNS name to access a set of Pods, even if Pods change.  `
  }, 
  {
    question: `13. What are the types of Kubernetes Services? `,
    answer: ` ClusterIP – Internal access only

NodePort – External access via a specific port

LoadBalancer – External access through a cloud load balancer

ExternalName – Maps to external services (DNS) `
  }, 
  {
    question: `14. What is a ConfigMap? `,
    answer: ` A ConfigMap stores non-confidential configuration data in key-value pairs, used by Pods. `
  }, 
  {
    question: `15. What is a Secret in Kubernetes? `,
    answer: ` A Secret stores sensitive information like passwords or API keys, in base64-encoded format. `
  }, 
  {
    question: `16. What is the difference between ConfigMap and Secret? `,
    answer: `
Feature	ConfigMap	Secret
Data type	Non-sensitive	Sensitive
Encoding	Plain text	Base64 encoded `
  }, 
  {
    question: `17. What is a Label in Kubernetes? `,
    answer: ` Labels are key-value pairs attached to objects (like Pods) for identification, organization, and selection. `
  }, 
  {
    question: `18. What is a Selector in Kubernetes? `,
    answer: `Selectors are used to filter Kubernetes objects based on labels.  `
  }, 
  {
    question: `19. What is the role of the Scheduler in Kubernetes? `,
    answer: `The Scheduler decides which node a pod should run on based on resource requirements and constraints.  `
  }, 
  {
    question: `20. What is Minikube? `,
    answer: `Minikube is a lightweight Kubernetes implementation used to run Kubernetes locally for learning and testing.  `
  }, 
  {
    question: `INTERMEDIATE KUBERBETES  . What is the difference between a Pod and a Deployment?`,
    answer: ` 
A Pod runs containers directly.

A Deployment manages Pods and ensures desired state (e.g., scaling, updates). `
  }, 
  {
    question: `2. What is a DaemonSet? `,
    answer: ` A DaemonSet ensures that a copy of a Pod runs on every node in the cluster (used for log collection, monitoring agents, etc.). `
  }, 
  {
    question: `3. What is a StatefulSet? `,
    answer: ` A StatefulSet is used for stateful applications like databases. It provides stable network IDs and persistent storage. `
  }, 
  {
    question: `4. What is a Job in Kubernetes? `,
    answer: ` A Job runs a batch process and ensures it completes successfully. `
  }, 
  {
    question: `5. What is a CronJob? `,
    answer: ` A CronJob is used to schedule Jobs to run periodically (like cron tasks in Linux). `
  }, 
  {
    question: `6. What is Ingress in Kubernetes? `,
    answer: ` Ingress manages external access (HTTP/HTTPS) to services in the cluster — it provides routing, SSL termination, and domain mapping. `
  }, 
  {
    question: `7. What is a NodePort Service? `,
    answer: `A NodePort service exposes a Pod to the outside world on a specific port of every node in the cluster. `
  }, 
  {
    question: `8. What is a LoadBalancer Service? `,
    answer: `It integrates with cloud provider load balancers to route external traffic to your application.  `
  }, 
  {
    question: `9. What is a Kubernetes Volume? `,
    answer: `A Volume provides persistent storage that lives beyond the lifecycle of a Pod.  `
  }, 
  {
    question: `10. What is the difference between Persistent Volume (PV) and Persistent Volume Claim (PVC)? `,
    answer: `
Term	Description
PV	Storage resource in the cluster
PVC	Request for storage by a user  `
  }, 
  {
    question: `11. What is a Taint and Toleration? `,
    answer: ` 
They are used to control which pods can be scheduled on certain nodes.

Taint: Marks a node to repel pods.

Toleration: Allows a pod to be scheduled on a tainted node. `
  }, 
  {
    question: ` 12. What is Node Affinity?`,
    answer: ` Node Affinity ensures pods are scheduled on specific nodes based on labels. `
  }, 
  {
    question: ` 13. How can you perform rolling updates in Kubernetes?`,
    answer: ` 
By using Deployments — update the image version and apply:

kubectl apply -f deployment.yaml


Kubernetes automatically updates pods one by one. `
  }, 
  {
    question: `14. How can you roll back a Deployment? `,
    answer: `kubectl rollout undo deployment/<deployment-name>  `
  }, 
  {
    question: `15. How do you view the status of Pods? `,
    answer: `kubectl get pods  `
  }, 
  {
    question: `16. How do you check the logs of a Pod? `,
    answer: ` kubectl logs <pod-name> `
  }, 
  {
    question: `17. How do you get detailed information about a Pod? `,
    answer: `kubectl describe pod <pod-name>  `
  }, 
  {
    question: ` 18. How do you scale a Deployment?`,
    answer: ` kubectl scale deployment <deployment-name> --replicas=5 `
  }, 
  {
    question: `19. What is Helm in Kubernetes? `,
    answer: ` Helm is a package manager for Kubernetes, used to install, upgrade, and manage applications (called charts). `
  }, 
  {
    question: `20. What is the difference between Kubernetes and Docker Swarm? `,
    answer: ` 
Feature	Kubernetes	Docker Swarm
Scalability	Highly scalable	Less scalable
Auto-healing	Yes	Limited
Networking	Complex	Simple
Load balancing	Advanced (Ingress)	Basic `
  }, 
  {
    question: `THE END OF ALL THE QUESTIONS `,
    answer: ` AND ANSWERS`
  }, 
  
];

let index = 0;

function displayQA() {
  document.getElementById('question').textContent = qaData[index].question;
  document.getElementById('answer').textContent = qaData[index].answer;
}

function nextQA() {
  if (index < qaData.length - 1) index++;
  displayQA();
}

function prevQA() {
  if (index > 0) index--;
  displayQA();
}

// Initialize on load
displayQA();

