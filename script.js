        const users = {
            "alice": { 
                followers: 125, 
                following: 89,
                bio: "Welcome to my corner of Blacksky! Love connecting with new people and sharing thoughts on tech and life. 🌟"
            },
            "bob": { 
                followers: 67, 
                following: 134,
                bio: "Software developer by day, philosopher by night. Always curious about the intersection of technology and humanity."
            },
            "charlie": { 
                followers: 89, 
                following: 76,
                bio: "Just discovered this amazing platform! Excited to learn and grow with this community. Let's connect! 🚀"
            },
            "diana": { 
                followers: 203, 
                following: 145,
                bio: "Product manager working on exciting new features. Love building things that make people's lives better. ✨"
            },
            "eva": { 
                followers: 156, 
                following: 92,
                bio: "Bookworm, AI enthusiast, and lifelong learner. Always happy to discuss the latest reads and tech trends."
            },
            "frank": { 
                followers: 78, 
                following: 115,
                bio: "Tech conference organizer and networking enthusiast. Let's meet up and build amazing things together!"
            },
            "george": { 
                followers: 134, 
                following: 87,
                bio: "Web developer and designer. Check out my portfolio and let me know what you think! Always open to feedback."
            },
            "hannah": { 
                followers: 189, 
                following: 123,
                bio: "Morning person who loves sharing positive vibes and beautiful moments. Spreading sunshine one post at a time! ☀️"
            },
            "isaac": { 
                followers: 98, 
                following: 156,
                bio: "Algorithm lover and problem solver. There's always an elegant solution waiting to be discovered. 💡"
            },
            "julia": { 
                followers: 167, 
                following: 203,
                bio: "Productivity enthusiast always looking for better ways to organize life and work. Happy to share tips and tricks!"
            }
        };

        let currentUserFollowing = new Set(['alice', 'charlie']);

        const posts = [
            {
                id: 1,
                author: "Alice",
                username: "alice",
                avatarUrl: "https://i.pravatar.cc/150?u=Alice",
                content: "Hello from Blacksky!",
                timestamp: "2h",
                likes: 0,
                liked: false,
                comments: 2,
                reposts: 1,
                tags: ["welcome", "firstpost"],
                commentsList: [
                    {
                        id: 1,
                        author: "Bob",
                        username: "bob",
                        avatarUrl: "https://i.pravatar.cc/150?u=Bob",
                        content: "Welcome to the platform!",
                        timestamp: "1h"
                    },
                    {
                        id: 2,
                        author: "Charlie",
                        username: "charlie",
                        avatarUrl: "https://i.pravatar.cc/150?u=Charlie",
                        content: "Great to see you here!",
                        timestamp: "45m"
                    }
                ]
            },
            {
                id: 2,
                author: "Bob",
                username: "bob",
                avatarUrl: "https://i.pravatar.cc/150?u=Bob",
                content: "Second post :)",
                timestamp: "1h",
                likes: 5,
                liked: false,
                comments: 3,
                reposts: 2,
                tags: ["update", "thoughts"],
                commentsList: [
                    {
                        id: 3,
                        author: "Charlie",
                        username: "charlie",
                        avatarUrl: "https://i.pravatar.cc/150?u=Charlie",
                        content: "I agree, it's a great post!",
                        timestamp: "45m"
                    },
                    {
                        id: 4,
                        author: "Diana",
                        username: "diana",
                        avatarUrl: "https://i.pravatar.cc/150?u=Diana",
                        content: "I love the way you express yourself!",
                        timestamp: "30m"
                    }
                ]
            },
            {
                id: 3,
                author: "Charlie",
                username: "charlie",
                avatarUrl: "https://i.pravatar.cc/150?u=Charlie",
                content: "Just discovered this amazing platform!",
                timestamp: "45m",
                likes: 3,
                liked: false,
                comments: 1,
                reposts: 0,
                tags: ["discovery", "excited", "tech"],
                commentsList: [
                    {
                        id: 5,
                        author: "Alice",
                        username: "alice",
                        avatarUrl: "https://i.pravatar.cc/150?u=Alice",
                        content: "Thanks for sharing!",
                        timestamp: "2h"
                    }
                ]
            },
            {
                id: 4,
                author: "Diana",
                username: "diana",
                avatarUrl: "https://i.pravatar.cc/150?u=Diana",
                content: "Working on some exciting new features...",
                timestamp: "30m",
                likes: 7,
                liked: false,
                comments: 4,
                reposts: 2,
                tags: ["development", "features", "coding"],
                commentsList: [
                    {
                        id: 6,
                        author: "Bob",
                        username: "bob",
                        avatarUrl: "https://i.pravatar.cc/150?u=Bob",
                        content: "Looking forward to seeing the new features!",
                        timestamp: "1h"
                    },
                    {
                        id: 7,
                        author: "Charlie",
                        username: "charlie",
                        avatarUrl: "https://i.pravatar.cc/150?u=Charlie",
                        content: "I'm excited too!",
                        timestamp: "45m"
                    }
                ]
            },
            {
                id: 5,
                author: "Eva",
                username: "eva",
                avatarUrl: "https://i.pravatar.cc/150?u=Eva",
                content: "Just finished reading an amazing book about AI and the future of humanity. Highly recommend!",
                timestamp: "15m",
                likes: 12,
                liked: false,
                comments: 3,
                reposts: 5,
                tags: ["books", "AI", "reading", "recommendation"],
                commentsList: [
                    {
                        id: 8,
                        author: "Frank",
                        username: "frank",
                        avatarUrl: "https://i.pravatar.cc/150?u=Frank",
                        content: "What's the title? I'm looking for a new read.",
                        timestamp: "10m"
                    },
                    {
                        id: 9,
                        author: "Alice",
                        username: "alice",
                        avatarUrl: "https://i.pravatar.cc/150?u=Alice",
                        content: "Sounds interesting! Send me the details.",
                        timestamp: "12m"
                    }
                ]
            },
            {
                id: 6,
                author: "Frank",
                username: "frank",
                avatarUrl: "https://i.pravatar.cc/150?u=Frank",
                content: "Who else is attending the tech conference next month? Let's meet up!",
                timestamp: "1h",
                likes: 8,
                liked: false,
                comments: 6,
                reposts: 2,
                tags: ["conference", "meetup", "networking", "tech"],
                commentsList: [
                    {
                        id: 10,
                        author: "George",
                        username: "george",
                        avatarUrl: "https://i.pravatar.cc/150?u=George",
                        content: "I'll be there! Let's coordinate.",
                        timestamp: "55m"
                    }
                ]
            },
            {
                id: 7,
                author: "George",
                username: "george",
                avatarUrl: "https://i.pravatar.cc/150?u=George",
                content: "Just launched my new portfolio website. Check it out and let me know what you think!",
                timestamp: "3h",
                likes: 15,
                liked: false,
                comments: 8,
                reposts: 4,
                tags: ["portfolio", "webdev", "design", "launch"],
                commentsList: [
                    {
                        id: 11,
                        author: "Hannah",
                        username: "hannah",
                        avatarUrl: "https://i.pravatar.cc/150?u=Hannah",
                        content: "It looks fantastic! Love the design.",
                        timestamp: "2h"
                    },
                    {
                        id: 12,
                        author: "Diana",
                        username: "diana",
                        avatarUrl: "https://i.pravatar.cc/150?u=Diana",
                        content: "Very professional. Great work!",
                        timestamp: "2.5h"
                    }
                ]
            },
            {
                id: 8,
                author: "Hannah",
                username: "hannah",
                avatarUrl: "https://i.pravatar.cc/150?u=Hannah",
                content: "Beautiful sunrise this morning! Starting the day with positive vibes.",
                timestamp: "5h",
                likes: 24,
                liked: false,
                comments: 3,
                reposts: 7,
                tags: ["sunrise", "morning", "positivity", "vibes"],
                commentsList: [
                    {
                        id: 13,
                        author: "Isaac",
                        username: "isaac",
                        avatarUrl: "https://i.pravatar.cc/150?u=Isaac",
                        content: "Looks amazing! Where was this taken?",
                        timestamp: "4h"
                    }
                ]
            },
            {
                id: 9,
                author: "Isaac",
                username: "isaac",
                avatarUrl: "https://i.pravatar.cc/150?u=Isaac",
                content: "Just solved a complex algorithm problem that's been bothering me for days. The solution was simpler than I thought!",
                timestamp: "7h",
                likes: 19,
                liked: false,
                comments: 5,
                reposts: 3,
                tags: ["coding", "algorithms", "problemsolving", "eureka"],
                commentsList: [
                    {
                        id: 14,
                        author: "Charlie",
                        username: "charlie",
                        avatarUrl: "https://i.pravatar.cc/150?u=Charlie",
                        content: "Care to share? I'm curious about the approach you took.",
                        timestamp: "6h"
                    },
                    {
                        id: 15,
                        author: "George",
                        username: "george",
                        avatarUrl: "https://i.pravatar.cc/150?u=George",
                        content: "That's often how it goes. Congrats!",
                        timestamp: "5h"
                    }
                ]
            },
            {
                id: 10,
                author: "Julia",
                username: "julia",
                avatarUrl: "https://i.pravatar.cc/150?u=Julia",
                content: "Anyone have recommendations for good productivity apps? Looking to organize my workflow better.",
                timestamp: "8h",
                likes: 7,
                liked: false,
                comments: 9,
                reposts: 1,
                tags: ["productivity", "apps", "organization", "workflow"],
                commentsList: [
                    {
                        id: 16,
                        author: "Bob",
                        username: "bob",
                        avatarUrl: "https://i.pravatar.cc/150?u=Bob",
                        content: "I've been using Notion and it's changed my life.",
                        timestamp: "7h"
                    },
                    {
                        id: 17,
                        author: "Eva",
                        username: "eva",
                        avatarUrl: "https://i.pravatar.cc/150?u=Eva",
                        content: "Try Todoist for task management. It's simple but powerful.",
                        timestamp: "6h"
                    },
                    {
                        id: 18,
                        author: "Alice",
                        username: "alice",
                        avatarUrl: "https://i.pravatar.cc/150?u=Alice",
                        content: "I'm a fan of TickTick. Great for both work and personal tasks.",
                        timestamp: "5h"
                    }
                ]
            }
        ];
        const userReplies = [
            {
                id: 101,
                author: "Alice",
                username: "alice",
                avatarUrl: "https://i.pravatar.cc/150?u=Alice",
                content: "Thanks for sharing this! Really insightful.",
                timestamp: "3h",
                likes: 5,
                liked: false,
                replyTo: {
                    author: "Eva",
                    content: "Just finished reading an amazing book about AI..."
                }
            },
            {
                id: 102,
                author: "Bob", 
                username: "bob",
                avatarUrl: "https://i.pravatar.cc/150?u=Bob",
                content: "I completely agree with your perspective on this.",
                timestamp: "2h",
                likes: 3,
                liked: false,
                replyTo: {
                    author: "Diana",
                    content: "Working on some exciting new features..."
                }
            },
            {
                id: 103,
                author: "Charlie",
                username: "charlie", 
                avatarUrl: "https://i.pravatar.cc/150?u=Charlie",
                content: "This is exactly what I needed to hear today!",
                timestamp: "4h",
                likes: 8,
                liked: false,
                replyTo: {
                    author: "Hannah",
                    content: "Beautiful sunrise this morning!"
                }
            }
        ];

        function createPostCard(post) {
            const tagsHTML = post.tags && post.tags.length > 0 
                ? post.tags.map(tag => `<span class="post-tag-inline">#${tag}</span>`).join('') 
                : '';

            return `
                <div class="post-card">
                    <div class="post-header">
                        <div class="avatar">
                            <img src="${post.avatarUrl}" alt="${post.author}">
                        </div>
                        <div class="post-info">
                            <div class="author">
                                ${post.author}
                                <span class="username">
                                    @${post.username}
                                    <span class="dot-separator">·</span>
                                    <span class="timestamp">${post.timestamp}</span>
                                    ${post.tags && post.tags.length > 0 ? `<span class="dot-separator">·</span><span class="post-tags-inline">${tagsHTML}</span>` : ''}
                                </span>
                            </div>
                        </div>
                    </div>
                    <div class="post-content">
                        ${post.content}
                    </div>
                    <div class="post-card-actions">
                        <div class="action">
                            <svg xmlns="http://www.w3.org/2000/svg" class="icon" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
                            </svg>
                            <span class="action-count">${post.comments || 0}</span>
                        </div>
                        <div class="action">
                            <svg xmlns="http://www.w3.org/2000/svg" class="icon" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15" />
                            </svg>
                            <span class="action-count">${post.reposts || 0}</span>
                        </div>
                        <div class="action like-button ${post.liked ? 'liked' : ''}" data-post-id="${post.id}">
                            <svg xmlns="http://www.w3.org/2000/svg" class="icon" fill="${post.liked ? 'currentColor' : 'none'}" viewBox="0 0 24 24" stroke="currentColor">
                                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
                            </svg>
                            <span class="action-count">${post.likes}</span>
                        </div>
                    </div>
                </div>
            `;
        }

        const commentInputSection = `
            <div class="comment-input-container">
                <textarea class="comment-input" placeholder="Write a comment..."></textarea>
                <button class="comment-submit-button">Comment</button>
            </div>
        `;

        function createCommentCard(comment) {
            return `
                <div class="comment-card">
                    <div class="comment-header">
                        <div class="avatar">
                            <img src="${comment.avatarUrl}" alt="${comment.author}">
                        </div>
                        <div class="post-info">
                            <div class="author">
                                ${comment.author}
                                <span class="username">
                                    @${comment.username}
                                    <span class="dot-separator">·</span>
                                    <span class="timestamp">${comment.timestamp}</span>
                                </span>
                            </div>
                        </div>
                    </div>
                    <div class="comment-content">
                        ${comment.content}
                    </div>
                </div>
            `;
        }

        function showComments(post, isFromFirstColumn) {
            console.log(`Comments viewed for post #${post.id} (feature disabled)`);
        }
        
        function addComment(post, commentInput, isFromFirstColumn) {
            const content = commentInput.value.trim();
            if (content) {
                const newComment = {
                    id: post.commentsList ? post.commentsList.length + 1 : 1,
                    author: "You",
                    username: "you",
                    avatarUrl: "https://i.pravatar.cc/150?u=You",
                    content: content,
                    timestamp: "Just now"
                };
                
                if (!post.commentsList) {
                    post.commentsList = [];
                }
                
                post.commentsList.unshift(newComment);
                post.comments++;
                
                commentInput.value = '';
                
                showComments(post, isFromFirstColumn);
                
                const postCards = document.querySelectorAll(`.like-button[data-post-id="${post.id}"]`);
                postCards.forEach(button => {
                    const postCard = button.closest('.post-card');
                    const commentCount = postCard.querySelector('.action:not(.like-button) .action-count');
                    if (commentCount) {
                        commentCount.textContent = post.comments;
                    }
                });
            }
        }
        function setActiveNavIcon(activeIcon) {
            document.querySelectorAll('.nav-icons .nav-icon').forEach(icon => {
            icon.classList.remove('active');
            });
            activeIcon.classList.add('active');
        }

        function hideSearchPanel() {
            if (isSearchActive) {
            isSearchActive = false;
            searchPanel.classList.remove('active');
            mainContent.classList.remove('search-active');
            setActiveNavIcon(homeButton);
            }
        }

        function hidePostPanel() {
            if (isCreatePostActive) {
            isCreatePostActive = false;
            createPostPanel.classList.remove('active');
            mainContent.classList.remove('create-post-active');
            postTextarea.value = '';
            setActiveNavIcon(homeButton);
            }
        }

        const searchButton = document.getElementById('searchButton');
        const searchPanel = document.getElementById('searchPanel');
        const mainContent = document.getElementById('mainContent');
        const searchInput = document.getElementById('searchInput');
        const searchText = document.getElementById('searchText');
        const searchCursor = document.getElementById('searchCursor');
        const searchContainer = document.getElementById('searchContainer');
        const searchPlaceholder = document.getElementById('searchPlaceholder');
        let isSearchActive = false;

        const homeButton = document.querySelector('.nav-icons .nav-icon:nth-child(1)');
        const createPostButton = document.querySelector('.nav-icons .nav-icon:nth-child(3)');
        const likesButton = document.querySelector('.nav-icons .nav-icon:nth-child(4)');
        const profileButton = document.querySelector('.nav-icons .nav-icon:nth-child(5)');
        
        homeButton.addEventListener('click', () => {
            setActiveNavIcon(homeButton);
            hideUserProfile();
            updateTopBarTitle('Home');
            document.getElementById('feed').scrollTop = 0;
        });

        searchButton.addEventListener('click', () => {
            setActiveNavIcon(searchButton);
            isSearchActive = !isSearchActive;
            searchPanel.classList.toggle('active');
            mainContent.classList.toggle('search-active');
            if (isSearchActive) {
            searchInput.focus();
            }
        });

        createPostButton.addEventListener('click', () => {
            setActiveNavIcon(createPostButton);
            isCreatePostActive = !isCreatePostActive;
            createPostPanel.classList.toggle('active');
            mainContent.classList.toggle('create-post-active');
            if (isCreatePostActive) {
            postTextarea.focus();
            } else {
            postTextarea.value = '';
            }
        });

        likesButton.addEventListener('click', () => {
            setActiveNavIcon(likesButton);
        });

        profileButton.addEventListener('click', () => {
            setActiveNavIcon(profileButton);
            showUserProfile('you');
            updateTopBarTitle('Profile');
        });
        searchInput.addEventListener('input', (e) => {
            const value = e.target.value;
            searchText.textContent = value;
            searchPlaceholder.style.display = value ? 'none' : 'block';
            
            const searchResults = document.getElementById('searchResults');
            if (value) {
                searchResults.classList.add('active');
                const searchTerm = value.toLowerCase();
                const filteredPosts = posts.filter(post => 
                    post.content.toLowerCase().includes(searchTerm) ||
                    post.author.toLowerCase().includes(searchTerm)
                );
                
                searchResults.innerHTML = '';
                filteredPosts.forEach(post => {
                    searchResults.innerHTML += createPostCard(post);
                });
            } else {
                searchResults.classList.remove('active');
                searchResults.innerHTML = '';
            }
        });

        searchInput.addEventListener('focus', () => {
            searchCursor.style.display = 'inline-block';
        });

        searchInput.addEventListener('blur', () => {
            searchCursor.style.display = 'none';
        });

        searchContainer.addEventListener('keydown', (e) => {
            if (e.key === 'Backspace') {
                e.preventDefault();
                if (searchInput.value.length > 0) {
                    searchInput.value = searchInput.value.slice(0, -1);
                    searchText.textContent = searchInput.value;
                    
                    const event = new Event('input');
                    searchInput.dispatchEvent(event);
                }
            }
        });

        searchContainer.addEventListener('click', () => {
            if (!isSearchActive) {
                isSearchActive = true;
                searchPanel.classList.add('active');
                mainContent.classList.add('search-active');
            }
            searchInput.focus();
        });

        document.addEventListener('click', (e) => {
            if (isSearchActive && 
                !searchPanel.contains(e.target) && 
                !searchButton.contains(e.target)) {
                hideSearchPanel();
            }

            if (isCreatePostActive && 
                !createPostPanel.contains(e.target) && 
                !createPostButton.contains(e.target)) {
                hidePostPanel();
            }
            
            const clickedOnMainContent = mainContent.contains(e.target);
            const clickedOnNavIcon = e.target.closest('.nav-icon');
            const clickedOnPanel = searchPanel.contains(e.target) || createPostPanel.contains(e.target);
            
            if (clickedOnMainContent && !clickedOnNavIcon && !clickedOnPanel) {
                setActiveNavIcon(homeButton);
            }
        });

        const createPostPanel = document.getElementById('createPostPanel');
        const postTextarea = document.getElementById('postTextarea');
        const cancelPostButton = document.getElementById('cancelPost');
        const submitPostButton = document.getElementById('submitPost');
        let isCreatePostActive = false;

        cancelPostButton.addEventListener('click', () => {
            hidePostPanel();
        });

        submitPostButton.addEventListener('click', () => {
            const content = postTextarea.value.trim();
            if (content) {
                const newPost = {
                    id: posts.length + 1,
                    author: "You",
                    username: "you",
                    avatarUrl: "https://i.pravatar.cc/150?u=You",
                    content: content,
                    timestamp: "Just now",
                    likes: 0,
                    liked: false,
                    comments: 0,
                    reposts: 0
                };
                
                posts.unshift(newPost);
                
                const feed = document.querySelector('.feed');
                feed.innerHTML = '';
                posts.forEach(post => {
                    feed.innerHTML += createPostCard(post);
                });

                hidePostPanel();
            }
        });

        posts.unshift({
            id: 999,
            author: "You",
            username: "you", 
            avatarUrl: "https://i.pravatar.cc/150?u=You",
            content: "Just set up my Blacksky profile! Excited to connect with everyone.",
            timestamp: "30m",
            likes: 8,
            liked: false,
            comments: 3,
            reposts: 1,
            tags: ["intro", "blacksky", "hello"],
            commentsList: []
        });

        userReplies.unshift({
            id: 199,
            author: "You",
            username: "you",
            avatarUrl: "https://i.pravatar.cc/150?u=You", 
            content: "This is really helpful, thanks for sharing!",
            timestamp: "1h",
            likes: 4,
            liked: false,
            replyTo: {
                author: "Julia",
                content: "Anyone have recommendations for good productivity apps?"
            }
        });

        function attachLikeButtonListeners() {
            document.removeEventListener('click', handleLikeButtonClick);
            document.addEventListener('click', handleLikeButtonClick);
        }
        
        function handleLikeButtonClick(e) {
            const likeButton = e.target.closest('.like-button');
            if (likeButton) {
                const postId = parseInt(likeButton.dataset.postId);
                const post = posts.find(p => p.id === postId);
                if (post) {
                    post.liked = !post.liked;
                    post.likes += post.liked ? 1 : -1;
                    
                    const likeCount = likeButton.querySelector('.action-count');
                    const likeIcon = likeButton.querySelector('svg');
                    
                    likeCount.textContent = post.likes;
                    likeButton.classList.toggle('liked', post.liked);
                    likeIcon.setAttribute('fill', post.liked ? 'currentColor' : 'none');
                }
            }
        }

        document.addEventListener('click', (e) => {
            const commentButton = e.target.closest('.action');
            if (commentButton && !commentButton.classList.contains('like-button')) {
                const postCard = commentButton.closest('.post-card');
                if (postCard) {
                    const likeButton = postCard.querySelector('.like-button');
                    if (likeButton) {
                        const postId = parseInt(likeButton.dataset.postId);
                        const post = posts.find(p => p.id === postId);
                        if (post) {
                            if (commentButton.querySelector('svg path').getAttribute('d').includes('M8 12h.01')) {
                                showComments(post, true);
                            } else {
                                console.log(`Repost clicked for post #${post.id}`);
                            }
                        }
                    }
                }
            }
        });

        const feed = document.getElementById('feed');
        
        posts.forEach((post) => {
            feed.innerHTML += createPostCard(post);
        });
        
        attachLikeButtonListeners();

        const emojiButton = document.getElementById('emojiButton');
        const scheduleButton = document.getElementById('scheduleButton');
        const pollButton = document.getElementById('pollButton');

        [emojiButton, scheduleButton, pollButton].forEach(button => {
            button.addEventListener('click', () => {
                button.classList.toggle('active');
            });
        });

        const tagsInput = document.getElementById('tagsInput');
        const tagsPreview = document.getElementById('tagsPreview');
        let currentTags = [];

        postTextarea.addEventListener('input', function() {
            submitPostButton.disabled = !this.value.trim();
        });

        tagsInput.addEventListener('keydown', function(e) {
            if (e.key === 'Enter' || e.key === ',') {
                e.preventDefault();
                const tagText = this.value.trim();
                if (tagText && !currentTags.includes(tagText)) {
                    addTag(tagText);
                    this.value = '';
                }
            }
        });

        function addTag(tag) {
            tag = tag.replace(/,/g, '').trim();
            if (!tag || currentTags.includes(tag)) return;
            
            currentTags.push(tag);
            updateTagsPreview();
        }

        function updateTagsPreview() {
            tagsPreview.innerHTML = '';
            currentTags.forEach(tag => {
                const tagElement = document.createElement('div');
                tagElement.className = 'tag-item';
                tagElement.innerHTML = `
                    #${tag}
                    <button type="button" data-tag="${tag}">×</button>
                `;
                tagsPreview.appendChild(tagElement);
            });

            document.querySelectorAll('.tag-item button').forEach(button => {
                button.addEventListener('click', function() {
                    const tagToRemove = this.getAttribute('data-tag');
                    currentTags = currentTags.filter(tag => tag !== tagToRemove);
                    updateTagsPreview();
                });
            });
        }

        submitPostButton.addEventListener('click', () => {
            const content = postTextarea.value.trim();
            if (content) {
                const newPost = {
                    id: posts.length + 1,
                    author: "You",
                    username: "you",
                    avatarUrl: "https://i.pravatar.cc/150?u=You",
                    content: content,
                    timestamp: "Just now",
                    likes: 0,
                    liked: false,
                    comments: 0,
                    reposts: 0,
                    tags: [...currentTags]
                };
                
                posts.unshift(newPost);
                
                const feed = document.querySelector('.feed');
                feed.innerHTML = '';
                posts.forEach(post => {
                    feed.innerHTML += createPostCard(post);
                });

                hidePostPanel();
                currentTags = [];
                tagsPreview.innerHTML = '';
            }
        });

        cancelPostButton.addEventListener('click', () => {
            hidePostPanel();
            currentTags = [];
            tagsPreview.innerHTML = '';
        });

        const filterButton = document.getElementById('filterButton');
        const filterPopup = document.getElementById('filterPopup');
        const filterTags = document.getElementById('filterTags');
        const clearFilters = document.getElementById('clearFilters');
        
        let activeFilters = new Set();
        let allTags = new Set();
        
        posts.forEach(post => {
            if (post.tags) {
                post.tags.forEach(tag => allTags.add(tag));
            }
        });
        
        function getTagCount(tag) {
            return posts.filter(post => post.tags && post.tags.includes(tag)).length;
        }
        
        function populateFilterTags() {
            filterTags.innerHTML = '';
            [...allTags].sort().forEach(tag => {
                const count = getTagCount(tag);
                const tagItem = document.createElement('div');
                tagItem.className = 'filter-tag-item';
                tagItem.innerHTML = `
                    <div class="filter-tag-checkbox ${activeFilters.has(tag) ? 'checked' : ''}" data-tag="${tag}"></div>
                    <span class="filter-tag-label">#${tag}</span>
                    <span class="filter-tag-count">(${count})</span>
                `;
                
                tagItem.addEventListener('click', () => toggleFilter(tag));
                filterTags.appendChild(tagItem);
            });
        }
        
        function toggleFilter(tag) {
            if (activeFilters.has(tag)) {
                activeFilters.delete(tag);
            } else {
                activeFilters.add(tag);
            }
            populateFilterTags();
            filterPosts();
        }
        
        function filterPosts() {
            const feed = document.getElementById('feed');
            feed.innerHTML = '';
            
            let filteredPosts = posts;
            if (activeFilters.size > 0) {
                filteredPosts = posts.filter(post => 
                    post.tags && post.tags.some(tag => activeFilters.has(tag))
                );
            }
            
            filteredPosts.forEach(post => {
                feed.innerHTML += createPostCard(post);
            });
            
            attachLikeButtonListeners();
        }
        
        clearFilters.addEventListener('click', () => {
            activeFilters.clear();
            populateFilterTags();
            filterPosts();
        });
        
        filterButton.addEventListener('click', (e) => {
            e.stopPropagation();
            filterPopup.classList.toggle('active');
            if (filterPopup.classList.contains('active')) {
                populateFilterTags();
            }
        });
        
        document.addEventListener('click', (e) => {
            if (!filterPopup.contains(e.target) && !filterButton.contains(e.target)) {
                filterPopup.classList.remove('active');
            }
        });
        
        filterPopup.addEventListener('click', (e) => {
            e.stopPropagation();
        });
        
        // Profile page functionality
        const profilePage = document.getElementById('profilePage');
        const profileBackButton = document.getElementById('profileBackButton');
        const profileAvatar = document.getElementById('profileAvatar');
        const profileName = document.getElementById('profileName');
        const profileUsername = document.getElementById('profileUsername');
        const profileBio = document.getElementById('profileBio');
        const profilePostCount = document.getElementById('profilePostCount');
        const profileFollowersCount = document.getElementById('profileFollowersCount');
        const profileFollowingCount = document.getElementById('profileFollowingCount');
        const profileLikeCount = document.getElementById('profileLikeCount');
        const profilePostsList = document.getElementById('profilePostsList');
        const profileRepliesList = document.getElementById('profileRepliesList');
        const followButton = document.getElementById('followButton');
        const followButtonText = document.getElementById('followButtonText');
        const postsTab = document.getElementById('postsTab');
        const repliesTab = document.getElementById('repliesTab');
        
        let currentProfileUser = null;
        
        function showUserProfile(username) {
            const userPosts = posts.filter(post => post.username === username);
            const user = userPosts.length > 0 ? userPosts[0] : null;
            
            if (!user) return;
            
            currentProfileUser = username;
            
            const totalLikes = userPosts.reduce((sum, post) => sum + post.likes, 0);
            
            const userData = users[username] || { followers: 0, following: 0 };
            
            profileAvatar.src = user.avatarUrl;
            profileAvatar.alt = user.author;
            profileName.textContent = user.author;
            profileUsername.textContent = `@${user.username}`;
            profileBio.textContent = userData.bio || 'No bio available.';
            profilePostCount.textContent = userPosts.length;
            profileFollowersCount.textContent = userData.followers;
            profileFollowingCount.textContent = userData.following;
            profileLikeCount.textContent = totalLikes;
            
            if (username === 'you') {
                followButton.style.display = 'none';
            } else {
                followButton.style.display = 'block';
                updateFollowButton(username);
            }
            
            profilePostsList.innerHTML = '';
            if (userPosts.length > 0) {
                userPosts.forEach(post => {
                    profilePostsList.innerHTML += createPostCard(post);
                });
            } else {
                profilePostsList.innerHTML = `
                    <div class="empty-state">
                        <div class="empty-state-icon">📝</div>
                        <div>No posts yet</div>
                    </div>
                `;
            }
            
            const userRepliesList = userReplies.filter(reply => reply.username === username);
            profileRepliesList.innerHTML = '';
            if (userRepliesList.length > 0) {
                userRepliesList.forEach(reply => {
                    profileRepliesList.innerHTML += createReplyCard(reply);
                });
            } else {
                profileRepliesList.innerHTML = `
                    <div class="empty-state">
                        <div class="empty-state-icon">💬</div>
                        <div>No replies yet</div>
                    </div>
                `;
            }
            
            switchToTab('posts');
            
            profilePage.classList.add('active');
            
            attachLikeButtonListeners();
        }
        
        function hideUserProfile() {
            profilePage.classList.remove('active');
            updateTopBarTitle('Home');
            setActiveNavIcon(homeButton);
        }
        
        profileBackButton.addEventListener('click', hideUserProfile);
        
        document.addEventListener('keydown', (e) => {
            if (e.key === 'Escape' && profilePage.classList.contains('active')) {
                hideUserProfile();
            }
        });
        
        document.addEventListener('click', (e) => {
            const avatar = e.target.closest('.avatar');
            if (avatar) {
                const postCard = avatar.closest('.post-card');
                if (postCard) {
                    const usernameElement = postCard.querySelector('.username');
                    if (usernameElement) {
                        const usernameText = usernameElement.textContent;
                        const match = usernameText.match(/@([a-zA-Z0-9_]+)/);
                        if (match) {
                            const username = match[1];
                            showUserProfile(username);
                            updateTopBarTitle('Profile');
                            if (username === 'you') {
                                setActiveNavIcon(profileButton);
                            }
                        }
                    }
                }
            }
        });
        
        function updateFollowButton(username) {
            const isFollowing = currentUserFollowing.has(username);
            
            if (isFollowing) {
                followButton.classList.add('following');
                followButtonText.textContent = 'Following';
            } else {
                followButton.classList.remove('following');
                followButtonText.textContent = 'Follow';
            }
        }
        
        function toggleFollow(username) {
            if (currentUserFollowing.has(username)) {
                currentUserFollowing.delete(username);
                users[username].followers--;
            } else {
                currentUserFollowing.add(username);
                users[username].followers++;
            }
            
            updateFollowButton(username);
            profileFollowersCount.textContent = users[username].followers;
        }
        
        followButton.addEventListener('click', () => {
            if (currentProfileUser) {
                toggleFollow(currentProfileUser);
            }
        });
        function createReplyCard(reply) {
            return `
                <div class="post-card">
                    <div class="reply-context">
                        <div class="reply-context-text">Replying to @${reply.replyTo.author}</div>
                        <div class="reply-context-content">${reply.replyTo.content}</div>
                    </div>
                    <div class="post-header">
                        <div class="avatar">
                            <img src="${reply.avatarUrl}" alt="${reply.author}">
                        </div>
                        <div class="post-info">
                            <div class="author">
                                ${reply.author}
                                <span class="username">
                                    @${reply.username}
                                    <span class="dot-separator">·</span>
                                    <span class="timestamp">${reply.timestamp}</span>
                                </span>
                            </div>
                        </div>
                    </div>
                    <div class="post-content">
                        ${reply.content}
                    </div>
                    <div class="post-card-actions">
                        <div class="action">
                            <svg xmlns="http://www.w3.org/2000/svg" class="icon" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
                            </svg>
                            <span class="action-count">0</span>
                        </div>
                        <div class="action">
                            <svg xmlns="http://www.w3.org/2000/svg" class="icon" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15" />
                            </svg>
                            <span class="action-count">0</span>
                        </div>
                        <div class="action like-button ${reply.liked ? 'liked' : ''}" data-post-id="${reply.id}">
                            <svg xmlns="http://www.w3.org/2000/svg" class="icon" fill="${reply.liked ? 'currentColor' : 'none'}" viewBox="0 0 24 24" stroke="currentColor">
                                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
                            </svg>
                            <span class="action-count">${reply.likes}</span>
                        </div>
                    </div>
                </div>
            `;
        }
        function switchToTab(tabName) {
            postsTab.classList.remove('active');
            repliesTab.classList.remove('active');
            profilePostsList.classList.remove('active');
            profileRepliesList.classList.remove('active');
            
            if (tabName === 'posts') {
                postsTab.classList.add('active');
                profilePostsList.classList.add('active');
            } else if (tabName === 'replies') {
                repliesTab.classList.add('active');
                profileRepliesList.classList.add('active');
            }
        }
        
        postsTab.addEventListener('click', () => {
            switchToTab('posts');
        });
        
        repliesTab.addEventListener('click', () => {
            switchToTab('replies');
        });
        
        function updateTopBarTitle(title) {
            const topBarTitle = document.querySelector('.top-bar h1');
            if (topBarTitle) {
                topBarTitle.textContent = title;
            }
        }
        
        const currentUser = {
            author: "You",
            username: "you",
            avatarUrl: "https://i.pravatar.cc/150?u=You"
        };
        
        users["you"] = { 
            followers: 42, 
            following: 156,
            bio: "New to Blacksky and loving the community! Excited to share thoughts and connect with amazing people. 🎉"
        };