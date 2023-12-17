# 서비스로 실행하는 방법 (원격 접속이 안됨!)

## 기존 서비스를 중지한다

```bash
sudo systemctl stop ollama
systemctl status ollama
```

## IP 및 포트를 허용한다.

```bash
sudo vi /etc/systemd/system/ollama.service
```

```text
[Service]
Environment="OLLAMA_HOST=127.0.0.1:11434"
Environment="OLLAMA_ORIGINS=http://127.0.0.1:*"
```

## 서비스를 다시 시작한다

```bash
sudo systemctl daemon-reload
sudo systemctl start ollama
systemctl status ollama
```

## 웹 브라우저에서 연결을 확인한다

<http://localhost:11434/>

## 모델을 다운로드한다

```bash
ollama pull mistral
ollama pull orca2
ollama pull llama2
```

## 로그를 확인한다

```bash
journalctl -u ollama | tail
```

# 서버로 실행하는 방법

```bash
export OLLAMA_HOST=127.0.0.1:11434
export OLLAMA_ORIGINS=http://127.0.0.1:*
ollama serve
ollama pull mistral
ollama pull orca2
ollama pull llama2
```

# 포트 허용하기

```bash
sudo ufw allow 11434
sudo ufw allow 8086
```

# 실행 확인하기

- <http://localhost:11434/>
- <http://localhost:8086/>
